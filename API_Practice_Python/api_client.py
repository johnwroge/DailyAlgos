# Building API Client

import os

from apiclient import APIClient

# Get the value of an environment variable
variable_value = os.getenv('VARIABLE_NAME')
# Print the value
print(variable_value)

class MyClient(APIClient):
    def getData(self):
        url = "https://fakestoreapi.com/products"
        data = self.get(url)
        return data.json()

    def makeCustomer(self, customer_info):
        url = 'https://fakestoreapi.com/products'
        return self.post(url, data=customer_info)


client = myClient()
print(client.getData())
