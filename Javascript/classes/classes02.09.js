// // //Lets go deeper to create class

// // // function Animal (name, energy);
// // //{
// // //let animal = Object.create(Animal.prototype);
// // // animal.name = name;
// // // animal.energy = energy;
// // //return animal;
// // //}
// // // we can also create instance of the function/class or object using "new" keyword hold the all the references of that object.

// // // // we have  removed Object.create and used "new" keyword from the previous prototype example.


// // // function Animal ( name, energy) {
// // // // let animal = Object.create(Animal.prototype);
// // // this.name = name;
// // // this.energy = energy;
// // // //return animal;
// // // }

// // // Animal.prototype.eat =  function(amount) {
// // //     console.log(`${this.name} is eating`);
// // //     this.energy += amount;
// // // }
// // // Animal.prototype.sleep =  function(length) {
// // //     console.log(`${this.name} is sleeping`);
// // //     this.energy += length;
// // // }
// // // Animal.prototype.play =  function(length) {
// // //     console.log(`${this.name} is playing`);
// // //     this.energy += length;
// // // }

// // // //const leo = Animal("Leo", 7);
// // // //const snoop = Animal("Snoop", 10);
// // // //console.log(leo)//undefined;

// // // const leo = new Animal("Leo", 7);
// // // const snoop = new Animal("Snoop", 10);
// // // console.log(leo); // return object



// // //Pseudoclassical Instantiation
// // //Constructor
// // //Object reference
// // //combine all methods into one bucket/basket - Class

// // //A class is a type of function, but instead of using  the keyword function to initiate it, we use the keyword class, and properties is assigned inside a constructor() method.
// // //Use the keyword class to create a class, and always add a constructor method.
// // //The constructor method is called each time the class object is initialized.
// class Animal {
//     constructor(name, energy) {
//         console.log('constructor...');
//         this.name = name;
//         this.energy = energy;
//     }
//     eat (amount) {
//         console.log(`${this.name} is eating`);
//         this.energy += amount;
//     }
//     sleep (length) {
//         console.log(`${this.name} is sleeping`);
//         this.energy += length;
//     }
//     play (length) {
//         console.log(`${this.name} is playing`);
//         this.energy -= length;
//     }
// };
// // const leo = new Animal('Leo', 7); // leo instance of the Animal class or leo is object  
// // const snoop = new Animal('Snoop', 10);
// // console.log(leo);
// // leo.eat(10);
// // console.log(leo);


// //Every object has own storage/reference area in the memory
// const firstObj = new Animal();

// console.log(firstObj);

// const secondObj = new Animal("second", 1);

// firstObj.name="first";
// firstObj.energy= 2;

// console.log(secondObj);

// console.log(firstObj);
// firstObj.name = "replace";
// firstObj.energy = 3;
// console.log(firstObj);
// firstObj.eat(5);
// console.log(firstObj);

// //const test = new Animal();
// // const leoObj = new Animal("Leo", 7); // leo instance of the Animal class or leo is object of this Animal class
// //const snoopObj = new Animal("Snoop", 10);
// //leoObj.eat(5);
// //console.log(leoObj.name); //Leo;
// //console.log(snoopObj.name);
// //console.log(leoObj);


// //Static Methods
// //Static methods are defined on the class itself, and not on the prototype/object. That means you cannot call a static method on the object

// // Task :  Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// // The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     describe() {
//         console.log(`${this.name}, ${this.age} years old`);
//     }

// };

// const John = new Person("John", 19);
// John.describe();


// // Task :
// // Create a class called Student which accepts the name of a student as string, and his/ her class name as string.
// // The Student class should have the following methods
// // fullName : John Doe
// // address  : vulkenstr 1, 2341, Berlin
// // Subjects : return all the subjects which currently studying like ‘Web’, ‘Math’, ‘Science’ etc
// // birthDate : need to pass the year and store this year in this object’s property birthDate.
// // age: it will return the age of the student, you no need to pass anything in this method but birthDate will take from previously stored from the object property.


// class Student {
// constructor(name, classy, address, birthDate){
//     this.fullName = name;
//     this.address = address;
//     this.birthDate = new Date(birthDate);

// }
// Subjects() {
//     console.log(`Web, Math, Science`);
// }
// Age(birthDate) {
//     console.log(2019 - this.birthDate.getFullYear());
// }
// }
// const Stud = new Student("John Doe", "fb15", "vulkenstr 1, 2341, Berlin", "1988-08-09");
// Stud.Age();
// console.log(Stud.address);
// Stud.Subjects();



//Create Class validateCreditCard and constructor accept the card number.
//Class contain one method validate and it decide card number is valid or not.
// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

class ValidateCreditCard {
    constructor(card_num) {
        this.card_num = card_num;
    }

    // validate(card_num) {
    //     return card_num.length === 16 && card_num%2==0 && card_num.split("").map(Number).reduce(function(a, b){return a+b}) > 16 && [...new Set(card_num.split(""))].length > 1
    
  
// }};
    validate(card_num) {
// console.log(card_num.length === 16)
console.log(Number.isInteger(Number.parseInt(card_num)))
// console.log(Number(card_num[card_num.length-1])%2==0)
// console.log(card_num.split("").map(Number).reduce(function(a, b){return a+b}) > 16)
// console.log(card_num.split("").filter(function(item, index){return card_num.indexOf(item) >= index;}).length > 1)
// console.log(Number.isInteger(Number.parseInt(card_num)))
// Number must be 16 digits, all of them must be numbers
        return card_num.length === 16 && 
        Number.isInteger(Number.parseInt(card_num)) &&
        // The final digit must be even
        Number(card_num[card_num.length-1])%2==0 && 
        // The sum of all the digits must be greater than 16
        card_num.split("").map(Number).reduce(function(a, b){return a+b}) > 16 && 
        // You must have at least two different digits represented (all of the digits cannot be the same)
        card_num.split("").filter(function(item, index){return card_num.indexOf(item) === index;}).length > 1
    
  
}};
    const obj = new ValidateCreditCard();

//test
console.log(obj.validate('9999777788880000')); //true
console.log(obj.validate('6666666666661666')); //true
console.log(obj.validate('a92332119c011112')); //false
console.log(obj.validate('4444444444444444')); //false
console.log(obj.validate('1211111111111112')); //true







// Calculate Vacation days
// create a class called companyEmployee which accepts name as a string and remainingVacationDays as a number (20)
// The class should have the following methods
// >> name
// >> remainingVacationDays
// >> takeVacationDays with daysOff as a parameter
// Output:
// create a object with a employee name
// call this name with a number of days off in order to output 15 remainingVacationDays afterwards


class CompanyEmployee {
    constructor(name, remainingVacationDays){
        this.name = name;
        this.remainingVacationDays = remainingVacationDays;
    }

    takeVacationDays(num) {
        return this.remainingVacationDays -= num;
    }


}
const Alex = new CompanyEmployee("Alex", 20);
console.log(Alex.takeVacationDays(5))


function filterList(l) {
    return l.filter(x => Number.isInteger(x));
}
console.log(filterList([1, 2, 3, "a", "b", 4]))
console.log(filterList(["A", 1, '&amp', 0, -9, 'Edabit']))