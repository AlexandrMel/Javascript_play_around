// # String Exercises

// ## These exercises are aimed at making you more familiar with strings, namely string methods as well as string interpolation. Print your results of each exercise to the console. Use the terminal to view your results. 

// 1. Declare a variable with the value of "I can walk in the park all day!". Print the word "park" to the console.
var satz= "I can walk in the park all day!"
console.log(satz.search('park'));
console.log(satz.substring(18,22));

// 2. Declare a variable with the value "JavaScript". Use string methods to print the the characters "aSc" from your declared variable.

var ScriPt = "JavaScript"
var sCRI = ScriPt.slice(3, 6);
console.log(sCRI);
console.log(ScriPt.slice(3, 6));

// 3. Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.

var hi = "Hello World"
console.log(hi.toUpperCase());

// 4. Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.

var earTH = "Hello Earthling";
console.log(earTH.toLowerCase());


// 5. Check if the sentence "nice shoes" contains the letter l or n. 

var sHoes = "nice shoes";
console.log(sHoes.search('n'));
console.log(sHoes.match('n'));
console.log(sHoes.includes('n'));
console.log(sHoes.search('l'));

// 6. Create a new string from a given string with the first character of the given string added at the front and back. example of exepected output: JavaScript => JJavaScriptJ

var javS = "JavaScript";
var firstCharacter = javS[0];
console.log(`${firstCharacter}${javS}${firstCharacter}`);

// 7. Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt

var javS = "JavaScript";
var firstCharacter = javS.slice(7);
console.log(`${firstCharacter}${javS}${firstCharacter}`);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes "Java".

var upp = javS.toUpperCase;
console.log(javS.includes(`Java`));
// 9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2. eg. of output JavaScript => tavaScripJ
var firstK = javS[0];
var lastK = javS[9];
console.log(firstK);
console.log(javS.replace(firstK, 't').replace(lastK, 'J'));



// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = "Maria". Print the sentence to the console using string interpolation. e.g. of output "My name is Maria. I live in Berlin and I am a teacher". 

// 11. Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.
