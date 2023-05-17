// This function is used to find the current weather condition of a given locaiton key.

function curent_weather_condition(location_key) {
  fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${location_key}?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&details=true`
  )
    .then((response) => response.json())
    .then((data) => {
      const temp = document.getElementById("Temperature");
      const wind1 = document.getElementById("wind1");
      const wind = document.getElementById("wind");
      const pressure = document.getElementById("pressure");

      // Fetching Temperature.
      temp.innerText = String(
        data[0].Temperature.Metric.Value + " " + data[0].Temperature.Metric.Unit
      );
      // Fetching Wind direction.
      wind1.innerText = String(
        data[0].Wind.Direction.Degrees + " " + data[0].Wind.Direction.Localized
      );
      // Fetching Wind speed.
      wind.innerText = String(
        data[0].Wind.Speed.Metric.Value + " " + data[0].Wind.Speed.Metric.Unit
      );
      // Fetching Pressure.
      pressure.innerText = String(
        data[0].Pressure.Imperial.Value + " " + data[0].Pressure.Imperial.Unit
      );

      console.log(JSON.stringify(data));
      console.log(String(data[0]));
    })
    .catch((error) => {
      console.log(error);
    });
}
