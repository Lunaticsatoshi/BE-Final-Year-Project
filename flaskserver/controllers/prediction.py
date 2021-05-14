from flask import jsonify, request
from flask_restful import Resource

class Prediction(Resource):
    def get(self):
        result = jsonify({"message":"Welcome to prediction api"})
        return result

    def post(self):
        print(request.form['key'])
        return {}