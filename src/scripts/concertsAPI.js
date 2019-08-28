function concertsFunction (){ fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=$rap&apikey=4AHnrESIHc8kroHO7hy3JMlm3Yo7uNMm")
    .then(venue => venue.json())
    .then(parsedConcerts => {
        console.table(parsedConcerts)
    })
}

// const cmContent = document.querySelector("container")

// // function for main title header

// function cmMainHeaderFunction(){
//     let cmMainHeaderString = ""
//     cmMainHeaderString += `<h1 class ="cmPageTitle">Welcome to Nashville!</h1>`
//     console.log(cmMainHeaderString)
//     return cmMainHeaderString
//   }

// //Function for second header

// function cmSearchHeaderFunction() {
//     let cmSearchHeaderString = ""
//     cmSearchHeaderString += 
//     `<h2 class = "search-header"> Search for stuff to do today </h2>`
//     return cmSearchHeaderString
//   };

// // function for the search section 

// function cmSearchSection(){
//     let cmMainSearchSectionString =""
//     cmMainSearchSectionString += `<section class = "search-section> 
//         <div class= "input-div">
//             <input type="text" class="park-input">
//     <button></button>
//             <input type="text" class="brewery-input">
//     <button></button>
//             <input type="text" class="meetups-input">
//     <button></button>
//             <input type="text" class="concerts-input">
//     <button></button>
//         </div>
//         </section>`
//         return cmMainSearchSectionString
//   };

// function cmResultsFunction(){
//     let resultsHeaderString = ""
//     resultsHeaderString += `<h2 class="results-header">Results</h2>`
//     return resultsHeaderString
//   };

// function cmResultsSectionFunction(){
//     let cmResultsSectionString = ""
//     cmResultsSectionString += `<section class="results-section">
//     <div class="results-div">

//     </div>
// </section>`
// }  ;

// function cmItineraryHeaderFunction(){
//     let cmItineraryHeaderString = ""
//     cmItineraryHeaderString += `<h2 class="itinerary-header">My itinerary</h2>
//         <section class="itinerary-section">
            
//         </section>`
// }
  
// cmContent.innerhtml =
// cmMainHeaderFunction() +
// cmSearchHeaderFunction() +
// cmSearchSection() +
// cmResultsFunction() +
// cmResultsSectionFunction() +
// cmItineraryHeaderFunction()



