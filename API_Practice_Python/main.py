from api_request import get_products, save_data

products = get_products()

save_data(products, 'products.json')

# formatted json document with command palette -> 
# format document with  -> json language features