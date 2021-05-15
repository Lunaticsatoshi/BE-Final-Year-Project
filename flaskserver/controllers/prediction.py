from flask import jsonify, request
from flask_restful import Resource, reqparse
from utilities.predict_price import predict_gcp_price
from resources.data import get_data
from resources.calculate_percent import calculate_percent


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
        HR_PCT = calculate_percent(args["Hour 1"],args["Hour 2"])
        DY_PCT = calculate_percent(args["Day Start"],args["Day End"])
        MN_PCT = calculate_percent(args["Month Start"],args["Month End"])
        data_array = [args["CPU Cores"],args["Memory"],args["Bandwidth"],args["Instances"],HR_PCT,DY_PCT,MN_PCT,args["Month End"]]
        input_array = get_data(data_array)
        prediction_result = predict_gcp_price(input_array)
        result = jsonify({"AWS": prediction_result})
        return result