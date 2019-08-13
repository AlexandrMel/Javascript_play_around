//TASK 01********Return first element**********
// Create a function that takes an array and returns the first element.
// Examples:
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

function firstNum (arr){
    console.log(arr[0]);
}
firstNum([1, 2, 3])
firstNum([80, 5, 100])
firstNum([-500, 0, 50])
// TASK 02********Find the Index**********
// Create a function that finds the index of a given item.
// Examples:
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1


function search(arr, num) {
console.log(arr.indexOf(num))
}
search([1, 5, 3], 5)
search([9, 8, 3], 3)
search([1, 2, 3], 4)


// TASK 03********Revert Array***********
// Write a function to reverse an array.
// Example
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

function rever(arr) { 
   console.log(arr.reverse());
}
rever([1, 2, 3, 4]);
// TASK 04********Count Syllables*********
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -
// Examples:
// numberSyllables("buf-fet") ➞ 2
// numberSyllables("beau-ti-ful") ➞ 3

function sylab(str) {
    console.log(str.replace(/[^-]/g, "").length+1)
}
sylab("buf-fet")
sylab("beau-ti-ful");
// TASK 05********Capture the Rook**********
// Write a function that returns true if two rooks can attack each other, and false otherwise.
// Examples:
// canCapture(["A8", "E8"]) ➞ true
// canCapture(["A1", "B2"]) ➞ false
// canCapture(["H4", "H3"]) ➞ true
// canCapture(["F5", "C8"]) ➞ false

function chess(arr) {
    console.log(arr[0][0] == arr[1][0] || arr[0][1] == arr[1][1] ? true : false);}
chess(["A8", "E8"])
chess(["A1", "B2"])
chess(["H4", "H3"])
chess(["F5", "C8"])




// TASK 06********SECRET MESSAGE*********
// Using array methods, you will transform the following array of strings:
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']; 
// into the following secret message:
// Programming is not about what you know it is about what you can figure out. -2015, Chris Pine, Learn to Program
secretMessage.splice(0,1, "Programming");
console.log(secretMessage);
secretMessage.splice(6, 10);
console.log(secretMessage);
secretMessage.splice(12, 2, "Learn to Program")
console.log(secretMessage);
secretMessage = secretMessage.join();


function flip() {

}


res = 0;
function scramble(str1, str2) {
    for(i=0; i<str1.length; i++) {
      
        for(j=0; j<str2.length; j++){
            if(str1[i] == str2[j]){ res += 1;}
        }
    }
    console.log(res)
  if(res == str2.length){console.log(`true`)}
  else {console.log(`false`)}
}
console.log(scramble('rkqodlw','world'));
console.log(scramble('cedewaraaossoqqyt','codewaars'));
