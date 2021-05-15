import requests

BASE = "http://127.0.0.1:5000/"

response = requests.post(BASE+"predict",{"CPU Cores": 2,"Memory": 4, "Bandwidth": 128,"Instances": 2, "Hour 1": 0.29084,"Hour 2": 0.68593,"Day Start": 16.0685,"Day End": 15.6746, "Month Start": 255.34, "Month End": 345.56})
print(response.json())