
import requests; 
import json
url1 = 'http://worldtimeapi.org/api'
url2 = 'http://worldtimeapi.org/api/'

zone1 = 'Africa/Abidjan'
zone2 = 'Africa/Algiers' 
zone3 = 'Africa/Bissau'

'''
given starter code, create a class that returns a date object that
contains a timezone and a time, also create a method in the class that
takes another timezone and converts the time stored in the class into
the time converted into that other time zone.  

'2023-06-21T02:49:24.511166+00:00'
'''

class MyAPI():
    def __init__(self, timezone):
        self.timezone = timezone
        self.time = query(timezone)
        return self
    def change(self, timezone):
        newTime = changeTime(self.time,timezone)
        return newTime



def query(timezone):
    result = requests.get(url2 + f'{zone1}')
    return result.json()

def changeTime(time, timezone):
    
    

# data = requests.get(url1 + '/timezone')
# print(data.json())

print(query(zone1))

