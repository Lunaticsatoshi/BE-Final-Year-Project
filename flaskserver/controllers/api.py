from flask import jsonify
from flask_restful import Resource

class PriceComparison(Resource):
    def get(self):
        result = jsonify({"hourly":{"Digital Ocean": "$0.13393", "Linode": "$0.045", "Vultr": "$0.060"},"monthly":{"Digital Ocean": "$90.00", "Linode": "$60.00", "Vultr": "$40.00"}})
        return result