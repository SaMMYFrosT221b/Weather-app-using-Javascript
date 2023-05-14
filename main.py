import requests
import os
os.system('cls')
# response  = requests.get("http://dataservice.accuweather.com/forecasts/v1/daily/1day/202396?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7")

DATA = {'Headline': {'EffectiveDate': '2023-05-15T07:00:00+05:30', 'EffectiveEpochDate': 1684114200, 'Severity': 4, 'Text': 'Danger of dehydration and heat stroke if outside for extended periods of time Monday', 'Category': 'heat', 'EndDate': '2023-05-15T19:00:00+05:30', 'EndEpochDate': 1684157400, 'MobileLink': 'http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?lang=en-us', 'Link': 'http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?lang=en-us'}, 'DailyForecasts': [
    {'Date': '2023-05-14T07:00:00+05:30', 'EpochDate': 1684027800, 'Temperature': {'Minimum': {'Value': 81.0, 'Unit': 'F', 'UnitType': 18}, 'Maximum': {'Value': 104.0, 'Unit': 'F', 'UnitType': 18}}, 'Day': {'Icon': 5, 'IconPhrase': 'Hazy sunshine', 'HasPrecipitation': False}, 'Night': {'Icon': 37, 'IconPhrase': 'Hazy moonlight', 'HasPrecipitation': False}, 'Sources': ['AccuWeather'], 'MobileLink': 'http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=1&lang=en-us', 'Link': 'http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=1&lang=en-us'}]}


# print(DATA.keys())
# print(" ")

print(DATA['Headline'])
print(" ")

print(DATA['DailyForecasts'][0]['Date'])
print(DATA['DailyForecasts'][0]['EpochDate'])
print(DATA['DailyForecasts'][0]['Temperature']['Minimum'])
print(DATA['DailyForecasts'][0]['Temperature']['Maximum'])
print(DATA['DailyForecasts'][0]['Day'])
print(DATA['DailyForecasts'][0]['Night'])
print(DATA['DailyForecasts'][0]['Sources'])
print(DATA['DailyForecasts'][0]['MobileLink'])
print(DATA['DailyForecasts'][0]['Link'])
