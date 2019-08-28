document.querySelector("#brewery-button")


fetch(
  "https://api.openbrewerydb.org/breweries?by_state=tennessee&by_city=nashville"
)
  .then(response => response.json())
  .then(allBreweries => {
    console.log(allBreweries);
    // allBreweries.forEach(name => {
    //    //Print foods to DOM
    //    document.querySelector("#container").innerHTML += `<div>
    //       <h3>${allBreweries.name}</h3>
    //       </div>
    //       `
    // })
  });

// Add input field and search button

// Filter search result info to display name, type and address of brewery
