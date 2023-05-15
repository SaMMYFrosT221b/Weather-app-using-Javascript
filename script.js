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
