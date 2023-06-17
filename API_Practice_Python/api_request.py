# import request library
import requests
import json
import os

parameters = {"limit": 1}

def get_products():
    # make get request to fake store .api
    response = requests.get("https://fakestoreapi.com/products", params=parameters)
    print(response.json())
    return response.json()

def save_data(data, filename):
    current_dir = os.getcwd()
    print(current_dir)  # Get the current directory
    file_path = os.path.join(current_dir, filename)  # Create the file path
    with open(file_path, 'w') as file:
        json.dump(data, file)