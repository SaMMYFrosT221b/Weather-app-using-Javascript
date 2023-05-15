// fetch(
//   "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=delhi"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     // Do something with the response data
//     // check_india(data);
//     console.log(data);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.log("error");
//   });

// setInterval(change_date, 1000);

// async function change_date() {
//   var currentdate = new Date();
//   var datetime =
//     currentdate.getDate() +
//     "/" +
//     (currentdate.getMonth() + 1) +
//     "/" +
//     currentdate.getFullYear() +
//     " @ " +
//     currentdate.getHours() +
//     ":" +
//     currentdate.getMinutes() +
//     ":" +
//     currentdate.getSeconds();
//   document.getElementById("date").innerHTML = datetime;
// }

// change_date();

// var data = [
//   {
//     Version: 1,
//     Key: "202396",
//     Type: "City",
//     Rank: 11,
//     LocalizedName: "Delhi",
//     EnglishName: "Delhi",
//     PrimaryPostalCode: "",
//     Region: { ID: "ASI", LocalizedName: "Asia", EnglishName: "Asia" },
//     Country: { ID: "IN", LocalizedName: "India", EnglishName: "India" },
//     AdministrativeArea: {
//       ID: "DL",
//       LocalizedName: "Delhi",
//       EnglishName: "Delhi",
//       Level: 1,
//       LocalizedType: "Union Territory",
//       EnglishType: "Union Territory",
//       CountryID: "IN",
//     },
//     TimeZone: {
//       Code: "IST",
//       Name: "Asia/Kolkata",
//       GmtOffset: 5.5,
//       IsDaylightSaving: false,
//       NextOffsetChange: null,
//     },
//     GeoPosition: { Latitude: 28.643, Longitude: 77.118, Elevation: [Object] },
//     IsAlias: false,
//     SupplementalAdminAreas: [[Object], [Object]],
//     DataSets: [
//       "AirQualityCurrentConditions",
//       "AirQualityForecasts",
//       "Alerts",
//       "ForecastConfidence",
//       "FutureRadar",
//       "MinuteCast",
//       "PremiumAirQuality",
//     ],
//   },
// ];

// console.log("Key :", data[0].Key);
// console.log(data[0].LocalizedName);
// console.log(data[0].Country.ID);
// console.log(data[0].Country.LocalizedName);

// function check_india(data) {
//   var l = data.length;
//   for (let i = 0; i < l; i++) {
//     if (
//       data[i].Country.ID == "IN" &&
//       data[i].Country.LocalizedName == "India"
//     ) {
//       console.log(i, " ", data[i].Key, " ", data[i].LocalizedName);
//     }
//   }
// }

var data = [
  {
    Version: 1,
    Key: "202396",
    Type: "City",
    Rank: 11,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "",
    Region: { ID: "ASI", LocalizedName: "Asia", EnglishName: "Asia" },
    Country: { ID: "IN", LocalizedName: "India", EnglishName: "India" },
    AdministrativeArea: {
      ID: "DL",
      LocalizedName: "Delhi",
      EnglishName: "Delhi",
      Level: 1,
      LocalizedType: "Union Territory",
      EnglishType: "Union Territory",
      CountryID: "IN",
    },
    TimeZone: {
      Code: "IST",
      Name: "Asia/Kolkata",
      GmtOffset: 5.5,
      IsDaylightSaving: false,
      NextOffsetChange: null,
    },
    GeoPosition: { Latitude: 28.643, Longitude: 77.118, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object], [Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "PremiumAirQuality",
    ],
  },
  {
    Version: 1,
    Key: "65329",
    Type: "City",
    Rank: 45,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "",
    Region: { ID: "ASI", LocalizedName: "Asia", EnglishName: "Asia" },
    Country: { ID: "CN", LocalizedName: "China", EnglishName: "China" },
    AdministrativeArea: {
      ID: "QH",
      LocalizedName: "Qinghai",
      EnglishName: "Qinghai",
      Level: 1,
      LocalizedType: "Province",
      EnglishType: "Province",
      CountryID: "CN",
    },
    TimeZone: {
      Code: "CST",
      Name: "Asia/Shanghai",
      GmtOffset: 8,
      IsDaylightSaving: false,
      NextOffsetChange: null,
    },
    GeoPosition: { Latitude: 37.369, Longitude: 97.361, Elevation: [Object] },
    IsAlias: false,
    ParentCity: {
      Key: "2333285",
      LocalizedName: "Haixi Prefecture",
      EnglishName: "Haixi Prefecture",
    },
    SupplementalAdminAreas: [],
    DataSets: [
      "AirQuality",
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyLocalIndices",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "PremiumAirQuality",
    ],
  },
  {
    Version: 1,
    Key: "2155308",
    Type: "City",
    Rank: 65,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "95315",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "CA",
      LocalizedName: "California",
      EnglishName: "California",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "PDT",
      Name: "America/Los_Angeles",
      GmtOffset: -7,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T09:00:00Z",
    },
    GeoPosition: { Latitude: 37.432, Longitude: -120.779, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "55137",
    Type: "City",
    Rank: 85,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "N4B",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: { ID: "CA", LocalizedName: "Canada", EnglishName: "Canada" },
    AdministrativeArea: {
      ID: "ON",
      LocalizedName: "Ontario",
      EnglishName: "Ontario",
      Level: 1,
      LocalizedType: "Province",
      EnglishType: "Province",
      CountryID: "CA",
    },
    TimeZone: {
      Code: "EDT",
      Name: "America/Toronto",
      GmtOffset: -4,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T06:00:00Z",
    },
    GeoPosition: { Latitude: 42.847, Longitude: -80.492, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "2971329",
    Type: "City",
    Rank: 85,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "",
    Region: { ID: "ASI", LocalizedName: "Asia", EnglishName: "Asia" },
    Country: { ID: "IN", LocalizedName: "India", EnglishName: "India" },
    AdministrativeArea: {
      ID: "MP",
      LocalizedName: "Madhya Pradesh",
      EnglishName: "Madhya Pradesh",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "IN",
    },
    TimeZone: {
      Code: "IST",
      Name: "Asia/Kolkata",
      GmtOffset: 5.5,
      IsDaylightSaving: false,
      NextOffsetChange: null,
    },
    GeoPosition: { Latitude: 24.634, Longitude: 81.565, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object], [Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "FutureRadar",
      "MinuteCast",
      "PremiumAirQuality",
    ],
  },
  {
    Version: 1,
    Key: "2969867",
    Type: "City",
    Rank: 85,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "",
    Region: { ID: "ASI", LocalizedName: "Asia", EnglishName: "Asia" },
    Country: { ID: "IN", LocalizedName: "India", EnglishName: "India" },
    AdministrativeArea: {
      ID: "MP",
      LocalizedName: "Madhya Pradesh",
      EnglishName: "Madhya Pradesh",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "IN",
    },
    TimeZone: {
      Code: "IST",
      Name: "Asia/Kolkata",
      GmtOffset: 5.5,
      IsDaylightSaving: false,
      NextOffsetChange: null,
    },
    GeoPosition: { Latitude: 24.738, Longitude: 81.331, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object], [Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "FutureRadar",
      "MinuteCast",
      "PremiumAirQuality",
    ],
  },
  {
    Version: 1,
    Key: "2204223",
    Type: "City",
    Rank: 85,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "52223",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "IA",
      LocalizedName: "Iowa",
      EnglishName: "Iowa",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "CDT",
      Name: "America/Chicago",
      GmtOffset: -5,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T07:00:00Z",
    },
    GeoPosition: { Latitude: 42.43, Longitude: -91.331, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "333472",
    Type: "City",
    Rank: 85,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "71232",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "LA",
      LocalizedName: "Louisiana",
      EnglishName: "Louisiana",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "CDT",
      Name: "America/Chicago",
      GmtOffset: -5,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T07:00:00Z",
    },
    GeoPosition: { Latitude: 32.458, Longitude: -91.493, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "2247464",
    Type: "City",
    Rank: 85,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "56283",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "MN",
      LocalizedName: "Minnesota",
      EnglishName: "Minnesota",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "CDT",
      Name: "America/Chicago",
      GmtOffset: -5,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T07:00:00Z",
    },
    GeoPosition: { Latitude: 44.599, Longitude: -95.211, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "334629",
    Type: "City",
    Rank: 85,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "13753",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "NY",
      LocalizedName: "New York",
      EnglishName: "New York",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "EDT",
      Name: "America/New_York",
      GmtOffset: -4,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T06:00:00Z",
    },
    GeoPosition: { Latitude: 42.278, Longitude: -74.916, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "342594",
    Type: "City",
    Rank: 385,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "81059",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "CO",
      LocalizedName: "Colorado",
      EnglishName: "Colorado",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "MDT",
      Name: "America/Denver",
      GmtOffset: -6,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T08:00:00Z",
    },
    GeoPosition: { Latitude: 37.642, Longitude: -104.018, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "2168804",
    Type: "City",
    Rank: 385,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "30668",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "GA",
      LocalizedName: "Georgia",
      EnglishName: "Georgia",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "EDT",
      Name: "America/New_York",
      GmtOffset: -4,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T06:00:00Z",
    },
    GeoPosition: { Latitude: 33.914, Longitude: -82.674, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "2240830",
    Type: "City",
    Rank: 385,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "62052",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "IL",
      LocalizedName: "Illinois",
      EnglishName: "Illinois",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "CDT",
      Name: "America/Chicago",
      GmtOffset: -5,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T07:00:00Z",
    },
    GeoPosition: { Latitude: 39.045, Longitude: -90.256, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "2126787",
    Type: "City",
    Rank: 385,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "65453",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "MO",
      LocalizedName: "Missouri",
      EnglishName: "Missouri",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "CDT",
      Name: "America/Chicago",
      GmtOffset: -5,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T07:00:00Z",
    },
    GeoPosition: { Latitude: 38.128, Longitude: -91.348, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "2138934",
    Type: "City",
    Rank: 385,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "73662",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "OK",
      LocalizedName: "Oklahoma",
      EnglishName: "Oklahoma",
      Level: 1,
      LocalizedType: "State",
      EnglishType: "State",
      CountryID: "US",
    },
    TimeZone: {
      Code: "CDT",
      Name: "America/Chicago",
      GmtOffset: -5,
      IsDaylightSaving: true,
      NextOffsetChange: "2023-11-05T07:00:00Z",
    },
    GeoPosition: { Latitude: 35.175, Longitude: -99.676, Elevation: [Object] },
    IsAlias: false,
    SupplementalAdminAreas: [[Object]],
    DataSets: [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyAirQualityForecast",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast",
      "Radar",
    ],
  },
  {
    Version: 1,
    Key: "2145004",
    Type: "City",
    Rank: 385,
    LocalizedName: "Delhi",
    EnglishName: "Delhi",
    PrimaryPostalCode: "78953",
    Region: {
      ID: "NAM",
      LocalizedName: "North America",
      EnglishName: "North America",
    },
    Country: {
      ID: "US",
      LocalizedName: "United States",
      EnglishName: "United States",
    },
    AdministrativeArea: {
      ID: "TX",
      LocalizedName: "Texas",
      SupplementalAdminAreas: [[Object]],
      DataSets: [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyAirQualityForecast",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar",
      ],
    },
  },
];

const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");

searchInput.addEventListener("input", () => {
  // Clear the existing suggestions
  searchSuggestions.innerHTML = "";

  // Get the user input
  const input = searchInput.value;

  var sugg = [];

  for (let i = 0; i < data.length; i++) {
    localName = data[i].LocalizedName;
    administrativeName = data[i].AdministrativeArea.LocalizedName;
    countryName = data[i].Country.LocalizedName;
    countryID = data[i].Country.ID;
    sugg.push(
      localName +
        ", " +
        administrativeName +
        ", " +
        countryName +
        "(" +
        countryID +
        ")"
    );
  }

  // Get the suggestions from the server or generate them dynamically
  const suggestions = sugg.filter((suggestion) =>
    suggestion.toLowerCase().includes(input.toLowerCase())
  );

  // Add the suggestions to the datalist
  suggestions.forEach((suggestion) => {
    const option = document.createElement("option");
    option.value = suggestion;
    searchSuggestions.appendChild(option);
  });
});

function display_city() {
  var input_value = document.getElementById("search-input").value;
  const myDiv = document.getElementById("city");

  myDiv.innerText = String(input_value);
}
