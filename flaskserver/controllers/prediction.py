from flask import jsonify, request
from flask_restful import Resource, reqparse
from utilities.predict_price import predict_gcp_price


prediction_post_args = reqparse.RequestParser()
prediction_post_args.add_argument("CPU Cores", type=int, help="Number of CPU cores is required", required=True)
prediction_post_args.add_argument("Memory", type=int, help="Amount of Memory is required", required=True)
prediction_post_args.add_argument("Bandwidth", type=int, help="Bandwidth is required", required=True)
prediction_post_args.add_argument("Instances", type=int, help="Number of Instances are required", required=True)
prediction_post_args.add_argument("Hour 1", type=float, help="Hour Start Price is required", required=True)
prediction_post_args.add_argument("Hour 2", type=float, help="Hour End Price is required", required=True)
prediction_post_args.add_argument("Day Start", type=float, help="Day Start Price is required", required=True)
prediction_post_args.add_argument("Day End", type=float, help="Day End Price is required", required=True)
prediction_post_args.add_argument("Month Start", type=float, help="Month Start Price is required", required=True)
prediction_post_args.add_argument("Month End", type=float, help="Month End Price is required", required=True)


class Prediction(Resource):
    def get(self):
        result = jsonify({"message":"Welcome to prediction api"})
        return result

    def post(self):
        args = prediction_post_args.parse_args()
        prediction_result = predict_gcp_price()
        result = jsonify({"AWS": args["Memory"]})
        return result