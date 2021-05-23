from flask import jsonify, request
from flask_restful import Resource, reqparse
from utilities.optimize_cloud import optimize_cloud_price


optimization_post_args = reqparse.RequestParser()
optimization_post_args.add_argument("Cloud", type=str, help="Name of cloud provider is required", required=True)
optimization_post_args.add_argument("Cores", type=int, help="Number of CPU cores are required", required=True)
optimization_post_args.add_argument("Pay", type=float, help="Full pay amount is required", required=True)
optimization_post_args.add_argument("Spot", type=float, help="Full sport amount is required", required=True)

class Optimize(Resource):
    def post(self):
        args = optimization_post_args.parse_args()
        cloud = args["Cloud"]
        if cloud =='AWS':
            first=1.0
            second=0.0
            third=0.0
        if cloud =='GCP':
            first=0.0
            second=1.0
            third=0.0
        if cloud =='Azure':
            first=0.0
            second=0.0
            third=1.0

        input_array = [[first,second,third,args["Cores"],args["Pay"],args["Spot"]]]
        optimization_result = optimize_cloud_price(input_array)
        if optimization_result > 0.5:
            result = jsonify({"prediction": optimization_result, "message": "You have selected a great deal!", "text": "The cloud parameters that you have provided returns the optimum results for the cloud service provider you are going for and will not cost you performance or scalability"})
        else:
            result = jsonify({"prediction": optimization_result, "message": "The selected deal can be better", "text": "The cloud parameters that you have provided  does not return the optimum results for the cloud service provider you are going for. Please change any one of the selected parameters"})

        return result