console.log(document.getElementById("first").textContent)
document.getElementById("first").textContent = "Modified"
document.getElementById("first").innerHTML = "<b>Now Bolded </b>"
document.getElementsByClassName("myclass")[1].textContent = "Accesses by classname"

//queryselector() - selects html nodes just like css - selects the first matching element
document.querySelector(".myclass").textContent = "Query selected"

//querySelectorAll selects all the matching elements 
document.querySelectorAll(".myclass")[1].textContent = "querySelectorAll's first element"