//Start to define function
showMessage()
console.log(`HEEEEEEE`);

function showMessage(){
    console.log(`Hello everyone!!`);
}
    function showMessage(){
        console.log(`Hello only you!!`);
    }
showMessage();
console.log(`HEEEEEEEMMMMMMM`);

//do exercise palindrom with function
//you can pass anz string and function will prin result

function pal(str) {
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
    return str === str.split("").reverse().join("")
}

console.log(pal("civic civic civic"));

// Define a function : Function Expressions

const showMessageX = function() {
    console.log(`I am function expression`);
};
showMessageX();
const copyFunc =showMessageX;
// this will not work - const copyFunc =showMessageX();
copyFunc();

//define with parameters

const showMess = function(message) {
    console.log(message);
};
showMess(`Hi man!!`);

//Define an arrow function expression

const showMessageWithArrow = () => {
    console.log(`I am arrow function`);
};
showMessageWithArrow();

const showMessageWithArrowWithParm = (message) => {
    console.log(message);
};
showMessageWithArrowWithParm(`I am arrow function with param`);
//with {}
//let sum =(a, b) => {console.log (a+b);};
//sum(4,5);

//without {}
let sum =(a, b) => a+b; // only worj with one statement
console.log(sum(1,2));

// Parameters vs Arguments

const param1=true;
const param2=false;

function twoParams(p1, p2) {
    console.log(p1, p2);
};

twoParams(param1, param2);
twoParams();

function showGreeting(from, text) {
    console.log(from +':' + text);
}
showGreeting('Ann', 'Hello');
showGreeting('Ann');

function showGreetingDefaultValue(from, text='no text given') {
    console.log(from +':'+ text);
}

showGreetingDefaultValue('Ann');

function aboutMe(firtName, lastName, work) {
    console.log('My name is '+ firtName +' '+ lastName + ' and I am a ' + work);
}

aboutMe('Alex', 'Melnic', 'Web_Developer');

//function with to default values of the parameters





//Function Return

function test() {  }
console.log(test());
function test1() {return true;}
console.log(test1());

function sumWithReturn(a, b)
{
    return a+b;
}
let result=sumWithReturn(1, 2)
console.log(result);

function doNothing()
{

}
console.log(doNothing()===undefined);

function doNothing1()
{
    return;
}
console.log(doNothing1()===undefined);




/////////////////////////////////////////////////////////////////
console.log(`=================================`);

const pyramid = (x) => {
    let output="";
    for (let i = 0; i<x; i++) {
    let myspace = "";   
    for(let s = 0; s<(x-i); s++) {
        myspace += " ";
    }
        for (let j = 1; j <= 2*i + 1; j++) {
            output+="*";
        }
        console.log(myspace+output);
        output="";
    }
}
pyramid(5);