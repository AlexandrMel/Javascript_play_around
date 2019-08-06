//Functions returning functions

function interviewQestions(job) {
// console.log(`interviewQuestion...`);
if(job == "designer") {
    //return function (name) {
        return function designerJon(name) {
            console.log(`${name} can you please explain what UX Design is?`)

        }
}
if(job == "teacher") {
    //return function(name) {
        return function teacherJob(name) {
            console.log(`What subject do you teach, ${name}?`);

        }
    }
    else {
        return function (name) {
            console.log(`Hello, ${name} what do you do?`);
        }
    }
}
// var funCallBack = InterviewQuestion(`designer1`);
// var funCallBack = function(name);
//{
// console.log(`Hello, ${name} what do you do?`)
//}
//funCallBack(`John`);

var teacherQuestion = interviewQestions("teacher");
var designerQuestion = interviewQestions("designer");

teacherQuestion("John")
designerQuestion("Lil")
interviewQestions("teacher")("Bob");


//Another example

let add = function (a, b) {
    return a+b;
    }
    let multiply = function(a, b) {
        return a*b;
    }

    let calc = function(num1, num2, callback) {
        return callback(num1, num2); // 1. add(2,3) 2. multiply(2,3)
    }

    console.log(calc(2,3,add))
    console.log(calc(2,3,multiply))


    function capitalizeFirstLetter(string) {
        string = string.split(" ");
      
        for(i=0; i<string.length; i++) {

        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        console.log(string[i]);
    
    }
   return string.join(" ")
    };
console.log(capitalizeFirstLetter("i am a student with big budget"))


var studenti = "i am a student!"
console.log(studenti.charAt(studenti.indexOf(" ")+1).toUpperCase())