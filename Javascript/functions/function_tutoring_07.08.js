// ************ADD UP TASK***************This time with loooooops***
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.


function addUp(n) {
    for(i=n-1;i>0;i--){
    n += i;
    }
    console.log(n);
}
addUp(3);
// ************GREET ALIENS TASK***************
// Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.
// The greeting should take the following format:
// “Oh powerful [stringElement], we humans offer our unconditional surrender!”
// Pass the following array to a global variable named aliens:
// ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]
// greetAliens(aliens);
// // Should print:
// // Oh powerful Blorgous, we humans offer our unconditional surrender! 
// // Oh powerful Glamyx, we humans offer our unconditional surrender! 
// // Oh powerful Wegord, we humans offer our unconditional surrender! 
// // Oh powerful SpaceKing, we humans offer our unconditional surrender! 

var name = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"]

function greetAliens() {
    for(i=0;i<name.length;i++) {
        console.log(`Oh powerful ${name[i]} we humans offer our unconditional surrender`);
    }
}
greetAliens();


// ***********CONVERT TO BABY TASK******************
// Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
// convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

function convertToBaby() {
    for(i=0;i<animals.length;i++){
        animals[i] = 'baby '+ animals[i];
    }
    console.log(animals);
}
convertToBaby();


// ***********SECRET SOCIETY******************
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
var first = ["Adam", "Sarah", "Malcolm"]// ➞ "AMS"
var second = ["Harry", "Newt", "Luna", "Cho"] // ➞ "CHLN"
// societyName(["Florian", "Vlad", "Maria", "Swantje", "Alexandr"]) ➞ "AFMSV"
var arr = ["Florian", "Vlad", "Maria", "Swantje", "Alexandr"]

function societyName(arr) {
    arr = arr.sort();
    res ="";
    for(i=0;i<arr.length; i++){
        res += arr[i].charAt(0);
    }
console.log(res);
}
societyName(arr);
societyName(first);
societyName(second);


// Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.
// The possible outcomes are:
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.
// If there’s a tie, then the game ends in a draw.
// Our code will break the game into four parts:
// Get the user’s choice.
// Get the computer’s choice.
// Compare the two choices and determine a winner.
// Start the program and display the results.
// ** Bonus Task: Make this game better by adding a secret cheat code. If a user types 'bomb' as their choice, then make sure they win, no matter what.

function game(yourChoice) {
    var typesOfchoices = ['Rock','Scissors','Paper'];
    var computerIndex = (Math.floor(Math.random() * 3) + 1)-1;
    console.log(`Your choice is: ${yourChoice}`)
    console.log(`Computer choice is: ${typesOfchoices[computerIndex]}`);
    if((yourChoice) == (typesOfchoices[computerIndex])) {
        console.log(`It is a draw!`);
    }
    else if((yourChoice) == "Scissors" && (typesOfchoices[computerIndex]) == "Paper") {
        console.log(`Scissors cut paper, You wins!`);
    }
    else if((yourChoice) == "Paper" && (typesOfchoices[computerIndex]) == "Scissors") {
        console.log(`Scissors cut paper, Computer wins!`);
    }
    else if((yourChoice) == "Scissors" && (typesOfchoices[computerIndex]) == "Rock") {
        console.log(`Rock destroys scissors!, Computer wins!`);
    }
    else if((yourChoice) == "Rock" && (typesOfchoices[computerIndex]) == "Scissors") {
        console.log(`Rock destroys scissors!, You win!`);
    }
    else if((yourChoice) == "Rock" && (typesOfchoices[computerIndex]) == "Paper") {
        console.log(`Paper covers rock!, Computer wins!`);
    }
    else if((yourChoice) == "Paper" && (typesOfchoices[computerIndex]) == "Rock") {
        console.log(`Paper covers rock.!, You win!`);
    }
    

};
game("Scissors");
game("Paper");

var newGame = game;
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");
newGame("Paper");




