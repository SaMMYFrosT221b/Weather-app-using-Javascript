const searchInput = document.getElementById("search-input");
const searchSuggestions = document.getElementById("search-suggestions");

// Runnig the change_date() at 1000ms
setInterval(change_date, 1000);

// Adding the event listner to the input tag.
searchInput.addEventListener("input", () => {
  // Clear the existing suggestions
  searchSuggestions.innerHTML = "";

  // Get the user input
  var input = searchInput.value;

  // Fetching the weather report from accuweather.com
  fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=${input}`
  )
    .then((response) => response.json())
    .then((data) => {
      var sugg = [""];

      for (let i = 0; i < data.length; i++) {
        // Accessing all the different values from JSON fromat of the response.
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

      // Created a global function.
      window.display_data = function () {
        // Accessing the input value
        var input_value = document.getElementById("search-input").value;
        const myDiv = document.getElementById("city");

        // Changing the value of City to the input text.
        myDiv.innerText = String(input_value);
        location_key = "";

        // Finding the location key of the input.
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

        // Calling the current weather function.
        curent_weather(location_key);
      };

      // Generating the suggestion box dynamically
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

function curent_weather(location_key) {
  // Fetching the data.
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
        data[0].Wind.Direction.Degrees + "° " + data[0].Wind.Direction.Localized
      );
      // Fetching Wind speed.
      wind.innerText = String(
        data[0].Wind.Speed.Metric.Value + " " + data[0].Wind.Speed.Metric.Unit
      );
      // // Fetching Pressure.
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

// Date changing function.
async function change_date() {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    " / " +
    (currentdate.getMonth() + 1) +
    " / " +
    currentdate.getFullYear() +
    " @ " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  document.getElementById("date").innerHTML = datetime;
}

change_date();
