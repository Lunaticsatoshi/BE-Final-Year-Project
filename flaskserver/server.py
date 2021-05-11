from flask import Flask
from flask_restful import Api, Resource
from controllers.api import HelloWorld

app = Flask(__name__)
api = Api(app)

# @app.route('/')
# def hello_world():
#     return "hello World"

api.add_resource(HelloWorld, "/")

if __name__ == "__main__":
    app.run(debug=True)