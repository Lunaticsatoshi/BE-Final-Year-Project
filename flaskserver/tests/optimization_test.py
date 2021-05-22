import requests

BASE = "http://127.0.0.1:5000/"

response = requests.post(BASE+"optimize",{"Cloud": "AWS","Cores": 4,"Pay": 2137.25,"Spot": 1278.97})
print(response.json())