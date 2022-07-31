//inline event handler
function eventHandlerInlineDemo(){
    alert("Inline Event Handler")
}

//event handlers
function eventHandlerPropDemo(){
    alert("Event Handler Property")
}

function eventHandlerPropDemo2(){
    alert("Event Handler Property 2")
}
document.getElementById("propdemo").onclick = eventHandlerPropDemo
document.getElementById("propdemo").onclick = eventHandlerPropDemo2 //this overrides the previous function

//event listners
function eventListenerDemo(){
    alert("Event Listener")
}

function eventListenerDemo2(){
    alert("Event Listener 2")
}
document.getElementById("listenerdemo").addEventListener('click', eventListenerDemo)
document.getElementById("listenerdemo").addEventListener('click', eventListenerDemo2)
//both the functions will get called one after the other

//event bubbling
function parentEventHandler(){
    alert("Parent Event Handler")
}

function childEventHandler(e){
    alert("Child Event Handler")
    e.stopPropagation() //this will stop the execution of parent's event
}

document.getElementById("parent").addEventListener('click', parentEventHandler)

document.getElementById("child").addEventListener('click', childEventHandler)

//cancelling default actions
function website(e){
    alert("You cannt visit this")
    e.preventDefault()
}
document.getElementById("website").addEventListener("click", website)