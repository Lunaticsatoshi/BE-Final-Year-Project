import pickle
from datetime import date, timedelta


def predict_gcp_price():
    new_forecast = {}
    with open("../models/gcp_model.pkl","rb") as File:
        clf = pickle.load(File)
    File.close()
    inputfeatures = [[-2.60671617e-01,  1.59104719e+00, -9.82589357e-02,  1.33424975e+00, 4.10833097e+00,  1.80812449e-01,  6.37374727e-01, -1.72337139e+00]]
    forecast_list = clf.predict(inputfeatures).tolist()
    current_date = date.today()
    for forecast in forecast_list:
        days_after = (current_date+timedelta(days=30)).isoformat()
        current_date = days_after 
        new_forecast[days_after] = forecast
    print(new_forecast)
    return new_forecast