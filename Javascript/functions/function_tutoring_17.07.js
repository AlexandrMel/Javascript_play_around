// TASK 1
// Create a function that takes two numbers as arguments and return their sum. Do it with the 3 different function syntaxes (Function Declaration, Function Expression and Arrow Function)

//Function Declaration
function sumy(x, y) {
    z = x+y
    console.log(z)
    return z;
}
sumy(5,7);
//Function Expression
var simpleFunct = function() {
    z = 20;
    x = 30;
    y = x+z;
    return y;
}
console.log(simpleFunct());
//Arrow function
var newF = (x, y) => {
    let z = x+y;
    return z; 
}
console.log(newF(10, 5));

// TASK 2
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function checkForPlurals(word) {

    console.log(word[(word.length)-1].includes('s'))
}
checkForPlurals('alexandrs')



// TASK 3
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.


// TASK 4
// Create functions in order to return the following figur:

/*
 		*
 	   ***
 	  *****
 	 *******
 	*********
   ***********
    *********
 	 *******
 	  *****
 	   ***
 		*
// */
// Collapse



// Jump
// Mark as read (esc)
// Message Input
