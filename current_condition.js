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

    console.log(JSON.stringify(data));
    console.log(String(data[0]));
  })
  .catch((error) => {
    console.log(error);
  });
