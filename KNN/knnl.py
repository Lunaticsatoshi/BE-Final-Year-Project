import numpy as np
import pandas as pd
from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
import pickle
import os
def knnLog(first,second,third,cores,pay,spot):
    dataset = pd.read_csv('./controllers/data.csv')
    X = dataset.iloc[:, :-1].values
    y = dataset.iloc[:, -1].values

    imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
    imputer.fit(X[:, 1:3])
    X[:, 1:3] = imputer.transform(X[:, 1:3])

    ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [0])], remainder='passthrough')
    X = np.array(ct.fit_transform(X))


    le = LabelEncoder()
    y = le.fit_transform(y)

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.25, random_state = 0)

    sc = StandardScaler()
    X_train = sc.fit_transform(X_train)
    X_test = sc.transform(X_test)


    classifier = KNeighborsClassifier(n_neighbors = 5, metric = 'minkowski', p = 2)
    classifier.fit(X_train, y_train)

    pay=2267.25
    spot=1178.97
    inputFeatures=[first,second,third, cores,pay,spot]
    infProb=classifier.predict_proba(sc.transform([inputFeatures]))[0][1]


    # open a file, where you ant to store the data
    d=os.getcwd()
    d1=os.path.join(d,"models")
    # print(d1)
    file = open(d1+'\\modelknn.pkl', 'wb')
    #C:\Users\91937\BE-Final-Year-Project\project\addOn\modelknn.pkl

    # dump information to that file
    pickle.dump(classifier, file)
    file.close()
    return infProb

if __name__ == "__main__":
    valu1=knnLog(1.0,0.0,0.0,8,2267.25,1178.97)
    print(valu1)
