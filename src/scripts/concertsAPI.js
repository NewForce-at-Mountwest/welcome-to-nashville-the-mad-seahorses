// ____________________ Click Event ________________________

const cmConcertsButton = document.querySelector("#concerts-button")
cmConcertsButton.addEventListener("click", function(){

const concertInput = document.querySelector(".concerts-input").value
console.log(concertInput)

// ____________ remove text from input field and previous searches ____________
document.querySelector(".concerts-input").value = ""
document.querySelector(".results-div").innerHTML = ""

// ___________ fetch call from api _____________

fetch(`https://app.ticketmaster.com/discovery/v2/events.json?city=nashville&keyword=${concertInput}&apikey=4AHnrESIHc8kroHO7hy3JMlm3Yo7uNMm`)
    .then(response => response.json())
    .then(parsedConcerts => {
        console.log(parsedConcerts)

        
// ______________________ loop of information from API _______________________
        
            for (i = 0; i < parsedConcerts._embedded.events.length; i++){
            console.log(parsedConcerts._embedded.events[i].name)
            document.querySelector(".results-div").innerHTML += 
            `<p> ${parsedConcerts._embedded.events[i].name}</p>`;           
            }            
        })
    })
    
