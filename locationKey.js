// var city = "Raipur";

function getLocationKey(city) {
  fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=${city}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Do something with the response data
      //   for (let i = 0; i < data.length; i++) {
      //     console.log(data[i].Key);
      //   }
      return data;
    })
    .catch((error) => {
      // Handle any errors
      console.log(error);
    });
}
