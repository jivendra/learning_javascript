var para = document.createElement("p")
console.log(para)
var text = document.createTextNode("New Paragraph Added")
para.appendChild(text);
document.querySelector("#original").appendChild(para)
para = document.createElement("p")
text = document.createTextNode("New Paragraph Inserted")
para.appendChild(text)
document.querySelector("#original").insertBefore(para, document.getElementsByTagName("p")[1])


var docFrag = document.createDocumentFragment()
var paraToAdd
var textContent

for (i = 1; i<=5; ++i) {
    paraToAdd = document.createElement("p")
    textContent = document.createTextNode("Paragraph " + i + " Added") 
    paraToAdd.appendChild(textContent)

    docFrag.appendChild(paraToAdd)
}

document.querySelector("#original").appendChild(docFrag)

var nodeToRemove = document.getElementsByTagName("p")[0]
console.log(nodeToRemove)
nodeToRemove.parentNode.removeChild(nodeToRemove)


//adding attributes and getting attibutes
var addingID = document.getElementsByTagName("p")
for(var i=0; i<addingID.length; i++){
    if(addingID[i].getAttribute("id") === null){
        addingID[i].setAttribute("id", "modified"+i)
    }
}

//remove attribute
addingID[1].removeAttribute("id")