//IIFE vs STAF
//Imediately invoked Expressions vs Self Invoked  Anonymous Functions

// function printSmt (str) {
//     console.log(str);
// }
// printSmt("Babylonian")

// (function() {
//     console.log(`Printtttt`)

// })();



//CLOSURES
//Vague definition of a closure: A function that contains at least one variable, and one nested scope

function outer() {
var b = 10;
function inner(){
    var  a = 20;
    console.log(a+b)
}
return inner;
}

var x = outer();
var y = outer();

console.log(typeof(x));

x(); // way of calling the function outer stored in the x - variable;