/* Data types 
Strings (represents textual data)
Numbers (represent nmbers of any kind)
Boolean (logical type)
Undefined
Null
Symbol

*/
// Data Type : String

let str="Hello";
let str1='Single quotes are ok too';
console.log (str, str1);
let name="John";
console.log(`Hello, ${name}`);
console.log("Hello," + name);
console.log(`the result is ${1+2}`);

let myName="Alexandr 123456"
console.log(myName[3]);
console.log(myName.length);
console.log(1/8);
console.log("This is a number"/2);
let currentYear=2019;
console.log(currentYear);
console.log(currentYear[3]);
console.log(currentYear.length);
let n=12.344;
console.log(n);

let myNumber=1234e17;
console.log(myNumber);

let myNumber1=1234e-3;
console.log(myNumber1);

let myNumber2=1234e-5;
console.log(myNumber2);

let newNum=20;
console.log(newNum * Infinity);
console.log(newNum * -Infinity);
console.log(newNum * 0);

let country="Germany";
console.log(country/newNum);

//concatination

let concat1="Hello";
let concat2="World";
let concat3=concat1 + concat2;
console.log(concat3);
console.log(concat1 + " " + concat2 + "!");

//concatination numbers and strings

let num1=20;
let num2=20;
let num3="hello";
let num4=num1 + num2 + num3;
console.log(num4); //40hello

let num5="hello";
let num6=num5+num1+num2;
console.log(num6); //hello2020

//Data type : Boolean 

let isgreater= 4>1;
console.log(isgreater);

let isDay=true;
console.log(isDay);


//Data type : Object

let myObject= {
        key1: "Value",
        key2: 12345,
        key3: {
            newObject: "hello",
        }
};
console.log(myObject);

//personal information object

var infoObject= {
    firstName:"Alex",
    lastName:"Miller",
    adress: {
        streetName: "septimer str 111",
        plz: 12345,
        city: "Berlin"
    }
};
console.log(infoObject);
console.log(infoObject.adress.city);
console.log(infoObject.adress.plz);

//typeof

console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof true);
console.log(typeof "pic");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof alert);
console.log(typeof infoObject.adress.plz);


