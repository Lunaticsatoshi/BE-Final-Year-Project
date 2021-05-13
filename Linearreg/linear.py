import pandas as pd
import math
import numpy as np
from sklearn import preprocessing, model_selection, svm
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from matplotlib import style
import datetime
import pickle

style.use('ggplot')
pd.options.mode.chained_assignment = None

def process_data(df):
    df = df[['CPU Cores','Memory','Bandwidth','Hour1','Hour2','Day Start','Day End','Month Start','Month End','Year Start','Year End','Instances']]
    df['HR_PCT'] = (df['Hour2'] - df['Hour1'])/df['Hour1']*100
    df['DY_PCT'] = (df['Day Start'] - df['Day End'])/df['Day Start']*100
    df['MN_PCT'] = (df['Month Start'] - df['Month End'])/df['Month Start']*100
    df['YR_PCT'] = (df['Year Start'] - df['Year End'])/df['Year Start']*100
    df = df[['CPU Cores','Memory','Bandwidth','Instances','HR_PCT','DY_PCT','MN_PCT','Month End']]
    return df

def train_test_splitting(X,y):
    return model_selection.train_test_split(X, y, test_size = 0.2)

def linear_training(X_train,X_test,y_train,y_test,X_lately):
    clf = LinearRegression(n_jobs=-1)
    clf.fit(X_train, y_train)
    accuracy = clf.score(X_test, y_test)
    forecast_set = clf.predict(X_lately)
    df['Forecast'] = np.nan
    last_date = df.iloc[-1].name
    # print(last_date)
    last_unix = last_date
    one_day = 86400
    next_unix = last_unix + one_day

    for i in forecast_set:
        next_date = datetime.datetime.fromtimestamp(next_unix)
        next_unix += one_day
        df.loc[next_date] = [np.nan for _ in range(len(df.columns)-1)] + [i]

    df['Month End'].plot()
    df['Forecast'].plot()
    plt.legend(loc=4)
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.show()
    # with open('azure_model.pkl','wb') as File:
    #     pickle.dump(clf,File)
    print(forecast_set, accuracy, forecast_out)

def svm_training(X_train,X_test,y_train,y_test,X_lately):
    clf = svm.SVR()
    clf.fit(X_train, y_train)
    accuracy = clf.score(X_test, y_test)
    forecast_set = clf.predict(X_lately)
    df['Forecast'] = np.nan
    last_date = df.iloc[-1].name
    # print(last_date)
    last_unix = last_date
    one_day = 86400
    next_unix = last_unix + one_day

    for i in forecast_set:
        next_date = datetime.datetime.fromtimestamp(next_unix)
        next_unix += one_day
        df.loc[next_date] = [np.nan for _ in range(len(df.columns)-1)] + [i]

    df['Month End'].plot()
    df['Forecast'].plot()
    plt.legend(loc=4)
    plt.xlabel('Date')
    plt.ylabel('Price')
    plt.show()
    print(forecast_set, accuracy, forecast_out)
    

if __name__ == '__main__':
    df = pd.read_csv("./data/AZURE_CSV.csv")
    df = process_data(df) 
    forecast_col = 'Month End' 
    df.fillna(-99999, inplace = True)
    forecast_out = int(math.ceil(0.001*len(df)))
    # forecast_out = math.ceil(0)
    # forecast_out = math.ceil(-1)
    # forecast_out = math.ceil(-31.756)
    df['label'] = df[forecast_col].shift(-forecast_out)
    X = np.array(df.drop(['label'], 1))
    X = preprocessing.scale(X)
    X = X[:-forecast_out]
    X_lately = X[-forecast_out:]

    df.dropna(inplace = True)
    y = np.array(df['label'])

    X_train, X_test, y_train, y_test = train_test_splitting(X,y)
    print(X_lately)
    linear_training(X_train,X_test,y_train,y_test,X_lately)
    # svm_training(X_train,X_test,y_train,y_test,X_lately)


