fetch(
  "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=hX1bnPZXuV3Pi7AVX6WdmOQ89sWMJrq7&q=delhi"
)
  .then((response) => response.json())
  .then((data) => {
    // Do something with the response data
    // check_india(data);
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors
    console.log("error");
  });
