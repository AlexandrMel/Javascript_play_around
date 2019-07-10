console.log('Hi there my name is D\'Angelo');

// The ternary operator

var sunny = true
var happy = sunny ? true : false

console.log(`Is it sunny? : ${sunny}`)
console.log(`Am i happy? :${happy}`)

//Mathematical operators

let myAge = 32;
let vladAge = 32;
console.log(myAge<vladAge);
console.log(`Am i younger then Vlad: ${myAge<vladAge}`);
console.log(`Am i younger or the same age as Vlad: ${myAge<=vladAge}`);
console.log(`Am i the same age as Vlad: ${myAge===vladAge}`);
console.log(`Am i the same age as Vlad: ${myAge!==vladAge}`);
var cloudy = false
console.log( !cloudy);


//logical operatrs

let password = false;
let username = true;
let login = (password && username);
console.log(`Can i Login: ${login}`);

let age = 18;
var validId = true;
let blackLeather = true;

let enterDaKLab = (age >= 18) && (validId) && blackLeather;
console.log(` Can i enter the Club?: ${enterDaKLab}`);

let  wig = true;
var validId = false;

let enterTheClub = wig || validId;
console.log(` Can i enter the Club?: ${enterTheClub}`);

let enterTheNewClub = ((age <= 18) && validId) || wig;
console.log(enterTheNewClub);

var neww = (validId && blackLeather) ? true : false;
console.log(neww);




