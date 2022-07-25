var fullName = "Jivendra"
console.log(fullName)

//Arrays
var user_info = []
userInfo = ["Jivendra", 20, 1543]
console.log(userInfo)
console.log(userInfo[0]) //jivendra
var demoArray = [10, 30, 20, 40, 50, 60, 70, 80, 90, 100]
console.log("demoArray = " + demoArray)
console.log(demoArray.length)
demoArray.push(23)
console.log(demoArray)
demoArray.pop()
console.log(demoArray)

//unshift() add item to the front of array
demoArray.unshift(43)
console.log(demoArray)

//shift removes item from from of the array
demoArray.shift()
console.log(demoArray)

//indexof() gives index of certain element, gives -1 when element is not found
console.log(demoArray.indexOf(40))

var p = 5, q = 2;

//Addition
console.log(p+q);
//You’ll get 7 as the output

//Subtraction
console.log(p-q);
//You’ll get 3 as the output

//Multiplication
console.log(p*q);
//You’ll get 10 as the output

//Division
console.log(p/q);
//You’ll get 2.5 as the output

//Remainder: gives the remainder when p is divided by q
console.log(p%q);
//You’ll get 1 as the output because 5 divided by 2 gives a remainder of 1

//Exponent: gives the value of p raised to the power of q
console.log(p**q);
//You’ll get 25 as the output because 5 to the power of 2 is 25