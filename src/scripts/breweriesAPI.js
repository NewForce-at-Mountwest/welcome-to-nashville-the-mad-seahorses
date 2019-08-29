// Add Event Listener
document.querySelector("#brewery-button").addEventListener("click", function() {
 
    // Select the input value and give it a variable
  const breweryInput = document.querySelector(".brewery-input").value;
  console.log(breweryInput);

//   Clear the input and results field
  document.querySelector(".brewery-input").value = ""
document.querySelector(".results-div").innerHTML = ""

  // Call to API
  fetch(
    `https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=nashville&by_name=${breweryInput}`)
    .then(response => response.json())
    .then(allBreweries => {
      console.log(allBreweries);

      // Loop through the array to print results based on input
      for (i = 0; i < allBreweries.length; i++)

    //   Print the results to the DOM
        document.querySelector(".results-div").innerHTML += `<p>${allBreweries[i].name}</p>`;
    });
});
