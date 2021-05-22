from flask import jsonify, request
from flask_restful import Resource, reqparse


optimization_post_args = reqparse.RequestParser()
optimization_post_args.add_argument("Cloud", type=str, help="Name of cloud provider is required", required=True)
optimization_post_args.add_argument("Cores", type=int, help="Number of CPU cores are required", required=True)
optimization_post_args.add_argument("Pay", type=float, help="Full pay amount is required", required=True)
optimization_post_args.add_argument("Spot", type=float, help="Full sport amount is required", required=True)

class Optimize(Resource):
    def post(self):
        args = optimization_post_args.parse_args()
        cloud = args["Cloud"]
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