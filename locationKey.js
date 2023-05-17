// This function is used to find the locaiton key of a given city.

function getLocationKey(city) {
  fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=${city}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
    });
}
