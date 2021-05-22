import pickle
import random

def optimize_cloud_price(new_input):
    with open("../models/modelknn.pkl","rb") as File:
        clf = pickle.load(File)
    File.close()
    k = random.randint(0, 1)
    infProb=clf.predict_proba(new_input)[0][k]
    return infProb