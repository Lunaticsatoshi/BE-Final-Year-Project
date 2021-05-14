from flask import jsonify, request
from flask_restful import Resource, reqparse
from utilities.predict_price import predict_gcp_price


prediction_post_args = reqparse.RequestParser()
prediction_post_args.add_argument("name", type=str, help="Send the name of the Prediction")

class Prediction(Resource):
    def get(self):
        result = jsonify({"message":"Welcome to prediction api"})
        return result

    def post(self):
        args = prediction_post_args.parse_args()
        prediction_result = predict_gcp_price()
        result = jsonify({"AWS": prediction_result})
        return result