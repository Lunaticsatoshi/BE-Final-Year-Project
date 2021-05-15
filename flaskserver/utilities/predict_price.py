import pickle
from datetime import date, timedelta


def predict_gcp_price(input_features):
    new_forecast = {}
    with open("../models/gcp_model.pkl","rb") as File:
        clf = pickle.load(File)
    File.close()
    inputfeatures = input_features
    forecast_list = clf.predict(inputfeatures).tolist()
    current_date = date.today()
    for forecast in forecast_list:
        days_after = current_date+timedelta(days=30)
        current_date = days_after
        new_date = days_after.isoformat() 
        new_forecast[new_date] = forecast
    return new_forecast