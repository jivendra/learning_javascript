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
console.log(person.email)

// array of objects

const todo = [
    {
        id: 1,
        text: 'Learn javascript',
        iscompleted: false
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


