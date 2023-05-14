import os

import requests

os.system("cls")

# response = requests.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=delhi")

DATA = {
    "Version": 1,
    "Key": "202396",
    "Type": "City",
    "Rank": 11,
    "LocalizedName": "Delhi",
    "EnglishName": "Delhi",
    "PrimaryPostalCode": "",
    "Region": {"ID": "ASI", "LocalizedName": "Asia", "EnglishName": "Asia"},
    "Country": {"ID": "IN", "LocalizedName": "India", "EnglishName": "India"},
    "AdministrativeArea": {
        "ID": "DL",
        "LocalizedName": "Delhi",
        "EnglishName": "Delhi",
        "Level": 1,
        "LocalizedType": "Union Territory",
        "EnglishType": "Union Territory",
        "CountryID": "IN",
    },
    "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Kolkata",
        "GmtOffset": 5.5,
        "IsDaylightSaving": False,
        "NextOffsetChange": None,
    },
    "GeoPosition": {
        "Latitude": 28.643,
        "Longitude": 77.118,
        "Elevation": {
            "Metric": {"Value": 215.0, "Unit": "m", "UnitType": 5},
            "Imperial": {"Value": 705.0, "Unit": "ft", "UnitType": 0},
        },
    },
    "IsAlias": False,
    "SupplementalAdminAreas": [
        {"Level": 2, "LocalizedName": "West", "EnglishName": "West"},
        {
            "Level": 3,
            "LocalizedName": "Rajouri Garden",
            "EnglishName": "Rajouri Garden",
        },
    ],
    "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "PremiumAirQuality",
    ],
}

print(DATA.keys())
