# Cloudy
Cloudy: A Cloud Optimization Platform that helps you to find the best cloud service provider for you and optimize your cloud resources 

## About 
This is a final Year project made in collaboartion of a 3 member team to build a bsuiness out of cloud cost comparison. This project demonstartes the use of Machine learning to predict and optimize your cloud costs, helping you to set up your projects without any hassles of mismanaging cloud bills

This is an open source Project for now.

## Technologies Used
- FrontEnd
  - Next js
  - Tailwind css
  - Theme UI
  - Chart js
  - react charts
  - react nav drawer
  - react scroll
- Backend
  - Flask
  - Flask Restful
  - jsonify
- Machine Learning
  - Linear Regression
  - KNN classifier
  - SVM
  - Logistic Regression

## How to set up

```
git clone <repo-link>
```

- Frontend
```
cd client

npm install
```

- Backend
1. Go to root directory

2. Setup virtual environment
```
py -m venv env
```

3. Start virtual environment
```
env/scripts/activate
```

4. Install dependencies
```
pip install -r requirements.txt
```

5. Run Flask server
```
python flaskserver/server.py
```

6. Run tests
```
python tests/test.py
```
