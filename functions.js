function exampleFunc(exampleVar) {
    console.log("This function got \"" + exampleVar + "\" as argument")
}
exampleFunc("TADA 96585")

//Assigning a function to a variable
var myFunction = function(a,b){
    return a+b
}
console.log(myFunction(2,3))

//passing function as a parameter and returning a function
function calling(c,d,func){
    return(func(c,d))
}

console.log(calling(5,5,myFunction))

//Returning a Function from Another Function
function retrunFunction() {
    return(function (){console.log("Hello world")})
}
temp = retrunFunction();
temp();

//IIFE - Immediately Invoked Function Expressions - functions that are invoked immediately once the browser reaches them.
(function simpleFunc() {
    console.log("Just a simple function");
})();

(namedFunction = function (value) {

    var results = 5;
    console.log('The product is ' + results*value);
})(3);