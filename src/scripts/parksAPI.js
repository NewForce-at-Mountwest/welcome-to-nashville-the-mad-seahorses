
fetch("http://localhost:8088/parks")
    .then(jwparks => jwparks.json())
    .then(parsedparks => {

const jwparksbutton= document.querySelector(".parksbutton")

jwparksbutton.addEventListener("click",function(){
document.querySelector(".results-div").innerHTML =(parsedparks)
})
        })