try {
    display("My name is Jamie");
} catch (err) {
    console.log(err.name + ": " + err.message);
} finally {
    console.log("The finally block is always executed");
}

console.log("Program proceeds after try...catch...finally block\n\n");



//err is an object that belongs to Error class

var num = 1.23456;

try {
    // eval('5 * ');
    console.log(num.toFixed(101));
    //console.log(x + y);
    //console.log(num.toUpperCase());
    //console.log(decodeURI('http://www.example.com/hello%2world.html'));
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log("Syntax Error");
    } else if (err instanceof EvalError) {
        console.log("Eval Error");
    } else if (err instanceof RangeError) {
        console.log("Range Error");
    } else if (err instanceof ReferenceError) {
        console.log("Reference Error");
    } else if (err instanceof TypeError) {
        console.log("Type Error");
    } else if (err instanceof URIError) {
        console.log("URI Error");
    } else
        console.log("Unknown Error");
}