from flask import Flask
from flask_restful import Api, Resource
from typing import Mapping
from flask import Flask,render_template,request
from controllers.api import HelloWorld
from controllers.prediction import Prediction
import os
from controllers.knnl import knnLog
import pickle

app = Flask(__name__)
api = Api(app)
api.add_resource(HelloWorld, "/")
api.add_resource(Prediction, "/predict")




# open a file, where you stored the pickled data
d=os.getcwd()
d1=os.path.join(d,"models")
file = open(d1+'\\modelknn.pkl', 'rb')
# dump information to that file
classifier= pickle.load(file)
# close the file
file.close()




@app.route('/optimize',methods=["GET","POST"])
def optimize():
        if request.method =='POST':
            myDict=request.form
            cloud=myDict['cloud']
            cores=myDict['cores']
            if cloud =='aws':
                first=1.0
                second=0.0
                third=0.0
            if cloud =='gcp':
                first=0.0
                second=1.0
                third=0.0
            if cloud =='azure':
                first=0.0
                second=0.0
                third=1.0
            pay=2267.25
            spot=1178.97

        #code for inference
            value2=knnLog(first,second,third,cores,pay,spot)
            print(value2)
            if value2 > 0.5:
                return render_template('show.html')
            else:
                return render_template('less.html')

        return render_template('index.html')



if __name__ == "__main__":
    app.run(debug=True)
