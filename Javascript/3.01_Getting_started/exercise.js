//Exercise

var niceString="super_nice_string";
console.log(niceString);
console.log(niceString[1]);
console.log(niceString[5]);

let namely="Alex";
let age=31;
let year=2019;

console.log(`${namely} is ${age} in ${year}`);

let isMarried=true;
console.log(`${namely} is married: ${isMarried}`);

let programmingLanguage="JavaScript";
let isFun=true;

console.log(`${programmingLanguage} is fun: ${isFun}`);
console.log(programmingLanguage[0], programmingLanguage[4]);
console.log(programmingLanguage.length);


// **Data Types Exercises P2**
// **Strings, Numbers, Booleans, Null, undefined data types & typeof operator**

// Exercises to become familiar with data types and typeof operator.

// 1. Copy and paste these variables into your JavaScript file. In the commented section, write down which type you think each variable is. Check your answers by printing the types to the console.

let length = 16.78; // number
let lastName = "Johnson"; // string
let car = ""; // string
let isOpen = true; // boolean

console.log( typeof length, typeof lastName, typeof car, typeof isOpen);



//2. Declare two variables called ageMark and ageJohn. Assign their ages - one age should be assigned as a string, the other as a number. Print the variables' data types to the console.
let ageMark="30";
let ageJohn=35;
console.log(typeof ageMark, typeof ageJohn);


//3. Is John older than Mark? Declare a variable with a boolean value and print the following to the console eg. "John is older than Mark: true"

let older= true;
console.log(`John is older than Mark: ${older}`);

//4. Declare a variable called x. Do not assign a value. Print x's data type to the console.
var x;
console.log(typeof x);


//5. Assign a string to x. Print x's data type again.
var x="String type"
console.log(typeof x);

//6. Print the last character of x's string to the console.
console.log(x[x.length-1]);


//7. Print the length of x to the console, as well as the data type of x's length.
console.log(x.length);
console.log(typeof x.length);

//8. Declare three variables: a, b, c. Assign numbers to each of the variables. Check if the variable values are equal or not (e.g. console.log(a == b);). Do this for each possibility (a, b) (a, c), (b, c). Then, print the data type of this check to the console.

let a= 12;
let b= 36;
let c= 12;
console.log(a == b);
console.log(b == c);
console.log(a == c);

console.log(typeof (a==b));
console.log(typeof (b==c));
console.log(typeof (a==c));


//9. What is the type of Infinity? Comment your answer. Print the type of infinity to the console.

let infin=Infinity;
console.log(typeof infin);

//10. Declare a variable. Assign the variable the value of a number or a string. Use the isNaN() method to check whether the variable is a number or not. Print "variable is NOT a number: true/false".

let newStuff=200;
isNaN(newStuff);
console.log(`variable is NOT a number: ${isNaN(newStuff)}`);




//11. Print the data type of isNaN(variable) to the console//.

console.log(typeof isNaN(newStuff));





//////////////////////////////////////////////////////////////


//Strings


let poem = 'To be or not to be';
console.log(`The original Poem: ${poem}`);
console.log('=====================');

// to UpperCase

var steve = poem.toUpperCase();
console.log(steve);

//toLowerCase

var steve = poem.toLowerCase();
console.log(steve);

// endWith()

let result = poem.endsWith('be');
console.log(result);

result = poem.slice(5,10);
console.log(`Sliced poem: ${result}`);
