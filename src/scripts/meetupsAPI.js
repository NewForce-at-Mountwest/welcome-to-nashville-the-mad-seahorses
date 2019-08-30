// this is my private tocken EWDWCUDI2BT6IQQP74XO//







const meetUpsButton = document.querySelector("#meetups-button")
meetUpsButton.addEventListener("click", function () {
    // console.log("hey")

    const meetupsInput = document.querySelector(".meetups-input").value;
    console.log(meetupsInput,)


document.querySelector(".concerts-input").value = ""
document.querySelector(".results-div").innerHTML = ""

fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville_${meetupsInput}&token=EWDWCUDI2BT6IQQP74XO`, {
    headers: {
        "Authorization": `Bearer EWDWCUDI2BT6IQQP74XO`,
        "Accept": "application/json"
    }
})
    .then(events => events.json())
    .then(parsedevents => {
        console.log(parsedevents.events)

        for (let i = 0; i < parsedevents.events.length; i++) {
            // console.log("inside the loop")
            document.querySelector(".results-div").innerHTML +=
                `<p>${parsedevents.events[i].name.html}</p>`
            // `<p>${parsedevents.events[i].description.html}</p>`
            // `<p>${parsedevents.events[i].end.html}</p>`
        }

    })

    // get click event working 

})




