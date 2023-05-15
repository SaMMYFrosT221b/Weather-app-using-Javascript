fetch(
  "http://dataservice.accuweather.com/currentconditions/v1/202396?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&details=true"
)
  .then((response) => response.json())
  .then((data) => {
    const temp = document.getElementById("Temperature");
    const wind1 = document.getElementById("wind1");
    const wind = document.getElementById("wind");
    const pressure = document.getElementById("pressure");

    temp.innerText = String(
      data[0].Temperature.Metric.Value + " " + data[0].Temperature.Metric.Unit
    );
    wind1.innerText = String(
      data[0].Wind.Direction.Degrees + " " + data[0].Wind.Direction.Localized
    );
    wind.innerText = String(
      data[0].Wind.Speed.Metric.Value + " " + data[0].Wind.Speed.Metric.Unit
    );
    pressure.innerText = String(
      data[0].Pressure.Imperial.Value + " " + data[0].Pressure.Imperial.Unit
    );

    // console.log(JSON.stringify(data));
    // console.log(String(data[0]));
  })
  .catch((error) => {
    console.log(error);
  });

// data = {
//   LocalObservationDateTime: "2023-05-15T15:47:00+05:30",
//   EpochTime: 1684145820,
//   WeatherText: "Hazy sunshine",
//   WeatherIcon: 5,
//   HasPrecipitation: false,
//   PrecipitationType: null,
//   IsDayTime: true,
//   Temperature: {
//     Metric: { Value: 42.7, Unit: "C", UnitType: 17 },
//     Imperial: { Value: 109, Unit: "F", UnitType: 18 },
//   },
//   RealFeelTemperature: {
//     Metric: { Value: 42.5, Unit: "C", UnitType: 17, Phrase: "Dangerous Heat" },
//     Imperial: { Value: 109, Unit: "F", UnitType: 18, Phrase: "Dangerous Heat" },
//   },
//   RealFeelTemperatureShade: {
//     Metric: { Value: 41, Unit: "C", UnitType: 17, Phrase: "Very Hot" },
//     Imperial: { Value: 106, Unit: "F", UnitType: 18, Phrase: "Very Hot" },
//   },
//   RelativeHumidity: 12,
//   IndoorRelativeHumidity: 12,
//   DewPoint: {
//     Metric: { Value: 7.4, Unit: "C", UnitType: 17 },
//     Imperial: { Value: 45, Unit: "F", UnitType: 18 },
//   },
//   Wind: {
//     Direction: { Degrees: 293, Localized: "WNW", English: "WNW" },
//     Speed: {
//       Metric: { Value: 14.1, Unit: "km/h", UnitType: 7 },
//       Imperial: { Value: 8.8, Unit: "mi/h", UnitType: 9 },
//     },
//   },
//   WindGust: {
//     Speed: {
//       Metric: { Value: 29.9, Unit: "km/h", UnitType: 7 },
//       Imperial: { Value: 18.6, Unit: "mi/h", UnitType: 9 },
//     },
//   },
//   UVIndex: 3,
//   UVIndexText: "Moderate",
//   Visibility: {
//     Metric: { Value: 4.8, Unit: "km", UnitType: 6 },
//     Imperial: { Value: 3, Unit: "mi", UnitType: 2 },
//   },
//   ObstructionsToVisibility: "",
//   CloudCover: 51,
//   Ceiling: { Metric: { Value: 9144, Unit: "m", UnitType: 5 }, Imperie: 17 },
//   Imperial: { Value: 109, Unit: "F", UnitType: 18 },
// };

// console.log(data.Temperature.Metric.Value + " " + data.Temperature.Metric.Unit);
// console.log(data.Wind.Direction.Degrees + " " + data.Wind.Direction.Localized);
// console.log(data.Wind.Speed.Metric.Value + " " + data.Wind.Speed.Metric.Unit);
