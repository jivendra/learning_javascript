//Styling using javascipt
document.getElementById("first").style.color = "Red";
document.getElementById("first").style.backgroundColor = "Yellow";

//className - change the classname
document.getElementById("second").className = "myclass";
document.getElementsByClassName("myclass")[0].textContent = "Class name changed"
console.log(document.querySelector("ul").childNodes.length)
document.querySelector("ul").firstChild.textContent = "First Child Changed";
document.querySelector("ul").lastChild.textContent = "Last Child Changed";
document.querySelector("ul").childNodes[5].style.background = "blue"

document.querySelector("ul").childNodes[3].previousSibling.textContent = "Previous Sibling";
document.querySelector("ul").childNodes[3].nextSibling.textContent = "Next Sibling";

//forms
console.log(document.getElementById("textinput").value)
document.getElementById("textinput").value = "Hello Again";

console.log(document.getElementById("numbers").options[1]);
console.log(document.getElementById("numbers").options[1].value);

document.getElementById("numbers").selectedIndex = 3 //selects the default option at page reload