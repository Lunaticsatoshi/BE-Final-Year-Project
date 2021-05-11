from flask import jsonify
from flask_restful import Resource

class HelloWorld(Resource):
    def get(self):
        result = jsonify({"message":"Hello world"})
        return result