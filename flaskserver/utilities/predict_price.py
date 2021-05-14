import pickle
def predict_gcp_price():
    with open("../models/gcp_model.pkl") as File:
        clf = pickle.load(File)
    File.close()
    inputfeatures = [-2.60671617e-01,  1.59104719e+00, -9.82589357e-02,  1.33424975e+00, 4.10833097e+00,  1.80812449e-01,  6.37374727e-01, -1.72337139e+00]
    forecast_list = clf.predict(inputfeatures)
    return forecast_list