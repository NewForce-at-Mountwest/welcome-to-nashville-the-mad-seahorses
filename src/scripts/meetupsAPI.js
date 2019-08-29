// this is my private tocken EWDWCUDI2BT6IQQP74XO//



const meetUpsButton = document.querySelector("#meetUpsButton")
meetUpsButton.addEventListener("click", function () {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_programming&token=EWDWCUDI2BT6IQQP74XO`, {
        headers: {
            "Authorization": `Bearer EWDWCUDI2BT6IQQP74XO`,
            "Accept": "application/json"
        }
    })
        .then(events => events.json())
        .then(parsedevents => {
            // console.log(parsedevents)
            document.querySelector(".results-div").innerHTML=(parsedevents)
    })
      
    
    // const personName = document.querySelector("#fullName").value
    // const personAddress = document.querySelector("#address").value
})

    // get click event working 






