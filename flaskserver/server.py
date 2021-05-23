from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS
from controllers.api import PriceComparison
from controllers.prediction import Prediction
from controllers.optimize import Optimize

app = Flask(__name__)
CORS(app)
api = Api(app)

# @app.route('/')
# def hello_world():
#     return "hello World"

api.add_resource(PriceComparison, "/compare")
api.add_resource(Prediction, "/predict")
api.add_resource(Optimize, "/optimize")


if __name__ == "__main__":
    app.run(debug=True)