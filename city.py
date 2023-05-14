import requests
import os
os.system('cls')

response = requests.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=delhi")

print(response.json())







