const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");

searchInput.addEventListener("input", () => {
  // Clear the existing suggestions
  searchSuggestions.innerHTML = "";

  // Get the user input
  var input = searchInput.value;

  fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=${input}`
  )
    .then((response) => response.json())
    .then((data) => {
      var sugg = [""];

      for (let i = 0; i < data.length; i++) {
        different_keys = data[i].Key;
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
            ")" +
            "-" +
            different_keys
        );
      }
      window.display_data = function () {
        var input_value = document.getElementById("search-input").value;
        location_key = "";
        for (let i = input_value.length - 1; i >= 0; i--) {
          if (input_value[i] != "-") {
            location_key = input_value[i] + location_key;
          } else {
            break;
          }
        }
        console.log("rat");
        console.log(location_key);
        console.log(input_value);
        curent_weather(location_key);
      };

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
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
      return error;
    });
});

// function display_data() {
//   var input_value = document.getElementById("search-input").value;
//   const myDiv = document.getElementById("city");

//   myDiv.innerText = String(input_value);
// }

function curent_weather(location_key) {
  fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${location_key}?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&details=true`
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
}
