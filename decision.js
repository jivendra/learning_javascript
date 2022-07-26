// === and !== check value and data type
var x = 2
var y = 2
console.log(x===y)
console.log(x!==2)

// == and != check for value only
var z = '2'
console.log(x==z)
console.log(x!='2')

for(var i=0;i<5;i++){
    console.log(i)
}

try {
    display("My name is Jamie");
} catch (err) {
    console.log(err.name + ": " + err.message);
} finally {
    console.log("The finally block is always executed");
}

console.log("Program proceeds after try...catch...finally block");