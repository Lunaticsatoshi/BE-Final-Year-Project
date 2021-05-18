from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
from controllers.api import HelloWorld
from controllers.prediction import Prediction

app = Flask(__name__)
CORS(app)
api = Api(app)

# @app.route('/')
# def hello_world():
#     return "hello World"

api.add_resource(HelloWorld, "/")
api.add_resource(Prediction, "/predict")


if __name__ == "__main__":
    app.run(debug=True)