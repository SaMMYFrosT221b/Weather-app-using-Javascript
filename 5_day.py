import os

import requests

os.system("cls")

response = requests.get(
    "http://dataservice.accuweather.com/forecasts/v1/daily/5day/202396?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7"
)

DATA = {
    "Headline": {
        "EffectiveDate": "2023-05-15T07:00:00+05:30",
        "EffectiveEpochDate": 1684114200,
        "Severity": 4,
        "Text": "Danger of dehydration and heat stroke if outside for extended periods of time Monday",
        "Category": "heat",
        "EndDate": "2023-05-15T19:00:00+05:30",
        "EndEpochDate": 1684157400,
        "MobileLink": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?lang=en-us",
        "Link": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?lang=en-us",
    },
    "DailyForecasts": [
        {
            "Date": "2023-05-14T07:00:00+05:30",
            "EpochDate": 1684027800,
            "Temperature": {
                "Minimum": {"Value": 81.0, "Unit": "F", "UnitType": 18},
                "Maximum": {"Value": 104.0, "Unit": "F", "UnitType": 18},
            },
            "Day": {
                "Icon": 5,
                "IconPhrase": "Hazy sunshine",
                "HasPrecipitation": False,
            },
            "Night": {
                "Icon": 37,
                "IconPhrase": "Hazy moonlight",
                "HasPrecipitation": False,
            },
            "Sources": ["AccuWeather"],
            "MobileLink": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?lang=en-us",
            "Link": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?lang=en-us",
        },
        {
            "Date": "2023-05-15T07:00:00+05:30",
            "EpochDate": 1684114200,
            "Temperature": {
                "Minimum": {"Value": 83.0, "Unit": "F", "UnitType": 18},
                "Maximum": {"Value": 109.0, "Unit": "F", "UnitType": 18},
            },
            "Day": {"Icon": 30, "IconPhrase": "Hot", "HasPrecipitation": False},
            "Night": {"Icon": 33, "IconPhrase": "Clear", "HasPrecipitation": False},
            "Sources": ["AccuWeather"],
            "MobileLink": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=1&lang=en-us",
        },
        {
            "Date": "2023-05-16T07:00:00+05:30",
            "EpochDate": 1684200600,
            "Temperature": {
                "Minimum": {"Value": 81.0, "Unit": "F", "UnitType": 18},
                "Maximum": {"Value": 105.0, "Unit": "F", "UnitType": 18},
            },
            "Day": {
                "Icon": 5,
                "IconPhrase": "Hazy sunshine",
                "HasPrecipitation": False,
            },
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": False,
            },
            "Sources": ["AccuWeather"],
            "MobileLink": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=2&lang=en-us",
        },
        {
            "Date": "2023-05-17T07:00:00+05:30",
            "EpochDate": 1684287000,
            "Temperature": {
                "Minimum": {"Value": 82.0, "Unit": "F", "UnitType": 18},
                "Maximum": {"Value": 105.0, "Unit": "F", "UnitType": 18},
            },
            "Day": {"Icon": 2, "IconPhrase": "Mostly sunny", "HasPrecipitation": False},
            "Night": {
                "Icon": 35,
                "IconPhrase": "Partly cloudy",
                "HasPrecipitation": False,
            },
            "Sources": ["AccuWeather"],
            "MobileLink": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=3&lang=en-us",
        },
        {
            "Date": "2023-05-18T07:00:00+05:30",
            "EpochDate": 1684373400,
            "Temperature": {
                "Minimum": {"Value": 78.0, "Unit": "F", "UnitType": 18},
                "Maximum": {"Value": 103.0, "Unit": "F", "UnitType": 18},
            },
            "Day": {
                "Icon": 5,
                "IconPhrase": "Hazy sunshine",
                "HasPrecipitation": False,
            },
            "Night": {
                "Icon": 36,
                "IconPhrase": "Intermittent clouds",
                "HasPrecipitation": False,
            },
            "Sources": ["AccuWeather"],
            "MobileLink": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/in/delhi/202396/daily-weather-forecast/202396?day=4&lang=en-us",
        },
    ],
}


def save_data():
    file = open("data.txt", "w")
    file.write(str(DATA))


save_data()