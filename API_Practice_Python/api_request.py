# import request library
import requests
import json
import os

parameters = {"limit": 1}
# functions for getting response from API

'''
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
'''

# class based api client 

# class MyAPIClient():
#     def __init__(self, baseURL) -> None:
#         self.baseURL = baseURL

#     def getProducts(self, endpoint):
#         url = self.baseURL + endpoint
#         response = requests.get(url)
#         return response.json()

#     def postProduct(self, endpoint, data):
#         url = self.baseURL + endpoint
#         response = requests.post(url,json=data)
#         return response.json()

#     def updateProduct(self, endpoint, data):
#         url = self.baseURL + endpoint
#         response = requests.patch()

#     def replaceProduct(self, endpoint, data):
#         url = self.baseURL + endpoint
#         response = requests.put()

    

# apiclient = MyAPIClient("https://fakestoreapi.com")

# # response = apiclient.getProducts("/products")
# # print(response)

# data = { "userId":5, "date":"2020-02-03", "products":[{"productId":5,"quantity":1},{"productId":1,"quantity":5}]}
# headers = {"Content-Type": "application/json"}          

# response = apiclient.postProduct("/carts",data)
# print(response)


# class APIClient():
#     def __init__(self, url) -> None:
#         self.base_url = url
#     def get(self, endpoint):
#         url = self.base_url + endpoint
#         response = requests.get(url)
#         return response.json()
#     def post(self, endpoint, data):
#         url = self.base_url + endpoint
#         response = requests.post(url, json=data)
#         return response.json()
#     def patch(self,endpoint, data):
#         url = self.base_url + endpoint
#         response = requests.patch(url, json=data)
#         return response.json()
#     def put(self, endpoint, data):
#         url = self.base_url + endpoint
#         response = requests.put(url, json=data)

# apiclient = APIClient("https://fakestoreapi.com")


class MyAPIClient():
    def __init__(self, url):
        self.url = url
    def post(self, data):
        endpoint = self.url + '/products'
        response = requests.post(endpoint, json=data)
        return response.json()
    def get(self):
        endpoint = self.url + '/products'
        response = requests.get(endpoint)
        return response.json()
    def put(self,data):
        endpoint = self.url + '/products'
        response = requests.put(endpoint, json=data)
        return response.json()
    def delete(self,data):
        endpoint = self.url + '/products'
        response = requests.delete(endpoint, json=data)
        return response.json()