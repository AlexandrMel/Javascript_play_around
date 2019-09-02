// //Lets go deeper to create class

// // function Animal (name, energy);
// //{
// //let animal = Object.create(Animal.prototype);
// // animal.name = name;
// // animal.energy = energy;
// //return animal;
// //}
// // we can also create instance of the function/class or object using "new" keyword hold the all the references of that object.

// // // we have  removed Object.create and used "new" keyword from the previous prototype example.


// // function Animal ( name, energy) {
// // // let animal = Object.create(Animal.prototype);
// // this.name = name;
// // this.energy = energy;
// // //return animal;
// // }

// // Animal.prototype.eat =  function(amount) {
// //     console.log(`${this.name} is eating`);
// //     this.energy += amount;
// // }
// // Animal.prototype.sleep =  function(length) {
// //     console.log(`${this.name} is sleeping`);
// //     this.energy += length;
// // }
// // Animal.prototype.play =  function(length) {
// //     console.log(`${this.name} is playing`);
// //     this.energy += length;
// // }

// // //const leo = Animal("Leo", 7);
// // //const snoop = Animal("Snoop", 10);
// // //console.log(leo)//undefined;

// // const leo = new Animal("Leo", 7);
// // const snoop = new Animal("Snoop", 10);
// // console.log(leo); // return object



// //Pseudoclassical Instantiation
// //Constructor
// //Object reference
// //combine all methods into one bucket/basket - Class

// //A class is a type of function, but instead of using  the keyword function to initiate it, we use the keyword class, and properties is assigned inside a constructor() method.
// //Use the keyword class to create a class, and always add a constructor method.
// //The constructor method is called each time the class object is initialized.
class Animal {
    constructor(name, energy) {
        console.log('constructor...');
        this.name = name;
        this.energy = energy;
    }
    eat (amount) {
        console.log(`${this.name} is eating`);
        this.energy += amount;
    }
    sleep (length) {
        console.log(`${this.name} is sleeping`);
        this.energy += length;
    }
    play (length) {
        console.log(`${this.name} is playing`);
        this.energy -= length;
    }
};
// const leo = new Animal('Leo', 7); // leo instance of the Animal class or leo is object  
// const snoop = new Animal('Snoop', 10);
// console.log(leo);
// leo.eat(10);
// console.log(leo);


//Every object has own storage/reference area in the memory
const firstObj = new Animal();

console.log(firstObj);

const secondObj = new Animal("second", 1);

firstObj.name="first";
firstObj.energy= 2;

console.log(secondObj);

console.log(firstObj);
firstObj.name = "replace";
firstObj.energy = 3;
console.log(firstObj);
firstObj.eat(5);
console.log(firstObj);

//const test = new Animal();
// const leoObj = new Animal("Leo", 7); // leo instance of the Animal class or leo is object of this Animal class
//const snoopObj = new Animal("Snoop", 10);
//leoObj.eat(5);
//console.log(leoObj.name); //Leo;
//console.log(snoopObj.name);
//console.log(leoObj);
