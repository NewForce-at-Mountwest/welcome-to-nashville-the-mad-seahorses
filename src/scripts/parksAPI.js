

const jwparksbutton= document.querySelector("#park-button")

// EVENT LISTENER

jwparksbutton.addEventListener("click",function(){
    const parkinput = document.querySelector(".park-input").value
    console.log(parkinput)

    // CLEAR INPUT AND SEARCH VALUE

document.querySelector(".park-input").value= ""
document.querySelector(".results-div").innerHTML = ""


// GET /posts?id=1&id=2
// http://localhost:8088/parks?dog_park=Yes

// FETCH THE FILTERED RESULTS

    fetch(`http://localhost:8088/parks?${parkinput}=Yes`)
    .then(jwparks => jwparks.json())
    .then(parsedparks => {
        console.log(parsedparks)

        for(let i=0; i<parsedparks.length; i++){
            console.log(parsedparks.park_name)
            document.querySelector(".results-div").innerHTML += 
            `<p>${parsedparks[i].park_name}</p>` 
        }
    })
})

// if(stateInputValue.includes(" ")){
//     stateInputValue.replace("_", " ")
// }

// function myFunction() {
//     var str = document.getElementById("demo").innerHTML; 
//     var res = str.replace(/blue/g, "red");
//     document.getElementById("demo").innerHTML = res;
//   }