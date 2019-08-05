//rest arguments

// function countArgum(param1, param2, param3)
// {
//     console.log(param1+" "+ param2 + " " + param3);
// }
// countArgum("I", "am", "superman");


function countArguments(...args) {
    var param1 = args[0];
    var param2 = args[1];
    var param3 = args[2];
    console.log(param1 + " " + param2 + " " + param3);

}
countArguments("I","am","Thor!");




function persData(FName, LName, birthD, ...restData ) {
    console.log(`My Name is ${FName} ${LName} i was born on ${birthD}, i was born in ${restData[0]}, zip code ${restData[1]} which is the capital of ${restData[2]} `)
}
persData("Alexandr", "Miller","9 of november 1988", "Chisinau", "2028", "Moldova");


var infg = ["Alex", "Miller", "9", "Chisinau", "Moldova"];
function personalD (info) {
    console.log(`My Name is ${info[0]} ${info[1]} i was born on ${info[2]}, i was born in ${info[3]}, which is the capital of ${info[4]} `)

}
personalD(infg);


// Scope: Local

function showMessage() {

    let message="Hello, I am Javascript!"
    console.log(message);
}
showMessage();//Hello, I am Javascript!
//console.log(message); Error , message is not defined

// Scope: Global

var userName ="Pico";

function showMessage1() {
   
    let message= "Hello, " + userName;
    console.log(message);
}
showMessage1(); // Hello, Pico


function showMessage2() {
    userName = "Polo";
    var message = "Hello, " + userName;
    console.log(message);
}
showMessage2();// Hello, Polo - function changed the value of var userName;
showMessage1(); // Hello, Polo - function used the changed value of userName;


var userFirstName = "John";
function showMessages() {
    //Case 1
    // let userFirstName = "Bob";
// Case 2
var userFirstName = "Bob";
let message = "Hello, " + userFirstName;
console.log(message);
}

console.log(userFirstName); //John
showMessages(); //Helo, Bob
console.log(userFirstName); //John



