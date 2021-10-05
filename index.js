console.log("Hello world")
fname = "Jivendra"
console.log(fname)
console.log(typeof fname)
console.log('My name is '+fname+' and the datatype is '+typeof fname)
console.log(`My name is ${fname}`)

const s = 'Hello world'
console.log(s)
console.log(s.length)
console.log(s.substring(0,5).toUpperCase())
console.log(s.toLowerCase())
console.log(s.split(''))

//Arrays

const fruits = ['pear', 'apple', true, 10, fname]
fruits[6] = 'banana' //you can add values to const array
fruits.push('mangoes') //add to the end
fruits.unshift('leechi') // add to the beginning
fruits.pop()
// fruits = []   this you cannot do, which is reinitialise the variable
console.log(fruits)

// Object and literal
const person = {
    firstname: 'Jivendra',
    lastname: 'sah',
    hobbies: ['Current affairs', 'tv shows'],
    address: {
        streetaddress: '01/45',
        city: 'Jaipur',
        state: 'Rajasthan',
        pincode: 303002
    }
}
person.email = 'jivendrasah33@gmail.com'
console.log(person.firstname, person.lastname, person.address, person.hobbies[1])
console.log(person.email,person.address.city)

// array of objects

const todo = [
    {
        id: 1,
        text: 'Learn javascript',
        iscompleted: true
    },
    {
        id: 2,
        text: 'eat momos',
        iscompleted: false
    },
    {
        id: 3,
        text: 'Pay bills',
        iscompleted: false
    }
]
console.log(todo[0])

//values to json
const todoJSON = JSON.stringify(todo)
console.log(todoJSON)

//LOOPS
console.log("------------")
for (let i = 0; i < todo.length ;i++) {
    console.log(todo[i].text)
}
console.log("------------")
for (let x of todo) {
    console.log(x.text)
}
let i = 0
while(i<3){
    //statements
    console.log("Hello")
    i++
}

//high order array methods : forEach, map, filter 
todo.forEach(function(x) {
    console.log(x.text)
})

//map returns an array
const todoText = todo.map(function(x) {
    return x.text
})

console.log(todoText)

const todoCompleted = todo.filter(function(x){
    return x.iscompleted === true
}).map(function(x){
    return x.text
})
console.log(todoCompleted)

// Conditional statements
let x = '10'
if(x == 10){
    console.log("X is 10")
} // == matched value and not datatype 
//=== will also match data type
if (x === 10 || x < 11){
    console.log("True")
} else if (x == 9) {
    console.log(false)
} else {
    console.log("Not matched")
}

let color = (x == 10) ? 'red' : 'blue'
console.log(color)

switch(color) {
    case 'red': 
        console.log('Color is red')
        break
    case 'blue':
        console.log('Color is blue')
        break
    default:
        console.log('neither')
        break
}

//functions
function addNums(num1 = 1, num2 = 2) { 
    //assigned values will be used if noting is passed
    return num1+num2
}
console.log(addNums(10,11))
console.log(addNums())  // assigned values of parameters used

//OOP

