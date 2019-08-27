// // // Function Instantiation / Initialisation
// // function Animal(name, energy) {
// //     let animal = {};
// //     animal.name = name;
// //     animal.energy = energy;
// //     animal.eat = function(amount) {
// //         console.log(`${this.name} is eating`);
// //         this.energy += amount;
// //     };
// //     animal.sleep = function(length){
// //         console.log(`${this.name} is sleeping`);
// //         this.energy += length;
// //     };
// //     animal.play = function(length){
// //         console.log(`${this.name} is playing`);
// //         this.energy -= length;
// //     };
// //     return animal;
// // };
// // const leo = Animal('Leo', 7);
// // const snoop = Animal(`Snoop`, 10);
// // leo.eat(10);  //same like console.log
// // // leo.sleep(5)


// // //Functional Instantiation with shared methods.
// // const animalMethods = {
// // eat(amount) {
// //     console.log(`${this.name} is eating`);
// //     this.energy += amount;
// // },
// // sleep(length) {
// //     console.log(`${this.name} is sleeping`);
// //     this.energy += length;
// // },
// // play(amount) {
// //     console.log(`${this.name} is playing`);
// //     this.energy += length;
// // },

// // };

// // function Animal(name, energy){
// // let animal = {};
// // animal.name = name;
// // animal.energy = energy;
// // animal.eat = animalMethods.eat;
// // animal.sleep = animalMethods.sleep;
// // animal.play = animalMethods.play;
// // return animal;

// // }
// // const leo = Animal(`leo`, 7);
// // const snoop = Animal('Snoop', 10);
// // leo.eat(10)


// // //Object.creat 
// // const parent = {
// //     name: "John",
// //     age: 30,
// //     nationality: "German"
// // };

// // const child = Object.create(parent);
// // child.name = "Doe";
// // child.age = 20;

// // console.log(child);
// // console.log(child.name);
// // console.log(child.age);
// // console.log(child.nationality);
// // console.log(parent.name);

// //Functional Instantiation with shared methods and object.create
// //function Animal(name, energy)
// // {
// //     let animal = Object.create(animalMethods);
// //     animal.name = name;
// //     animal.energy = energy;
// //     animal.eat = animalMethods.eat;
// //     animal.sleep = animalMethods.sleep;
// //     animal.play = animalMethods.play;
// //     return animal;
// // }

// // const leo = Animal(`Leo`, 7)
// // const snoop = Animal(`Snoop`, 10)
// // leo.eat(10);

// // //So far, so good. There are still some improvements we can make though. It seems that still have to manage a separate object (animalMethods) in order to share methods across instances.
// // // that we can implement through prototype.
// // //prototype - every function in Javascript has a prototype property that references a object.
// // function doThings (){}
// // console.log(doThings.prototype); // doThings()
// // //function doThings(){} = doThings.prototype

// // //Prototype Instantiation

// // function Animal(name, energy) {
// //     let animal = Object.create(Animal.prototype); // Object.create(animalMethods);
// //     animal.name = name;
// //     animal.energy = energy;
// //     return animal;

// // }

// // Animal.prototype.eat = function(amount) {
// //     console.log(`${this.name} is eating`)
// //     this.energy += amount;
// // }
// // Animal.prototype.sleep = function(amount) {
// //     console.log(`${this.name} is sleeping`)
// //     this.energy += length;
// // }
// // Animal.prototype.play = function(amount) {
// //     console.log(`${this.name} is playing`)
// //     this.energy += length;
// // }
// // const leo = Animal(`Leo`, 7)
// // const snoop = Animal(`Snoop`, 10)
// // leo.eat(10);


// // let obj = {};
// // let obj = new Object(); // Object is an built in object contructor function with is own
// // // prototype referencing a huge object with toString and other methods.
// // console.log(obj)
// // console.log(obj.__proto__=== Object.prototype);
// // console.log(obj.toString===obj.__proto__.toString);
// // let arr = [1, 2, 3];
// // //arr.prototype.toString===arr.toString;
// // //There is no more [[prototype]] in the chain above Object.prototype
// // console.log(Object.prototype.__proto__); //null



// //let arr = [9, 29, 3]
// //arr.forEach()// Array.prototype.forEach

// //Object Prototype
// // let obj = {};
// // console.log(obj);

// //Built in prototypes: Array, Date, Function

// let arr = [1, 2, 3];

// console.log(arr.__proto__===Array.prototype);

// console.log(arr.__proto__.__proto__===Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__); //null

// console.log(arr); //the result of Array prototype.toString


// //Another example

// function f(){}
// console.log(f.__proto__===Function.prototype)
// console.log(f.__proto__.__proto__===Object.prototype)


// //javascript array prototype constructor

// Array.prototype.myTest = function(){
//     console.log(`Array prototype...`);
//     for(i=0; i<this.length;i++){
//         this[i]=this[i].toUpperCase();

//     }
// }

// var fruits = ["Orange", "Apple", "Mango", "Banana"];
// console.log(fruits);
// fruits.myTest();
// console.log(fruits)

// var testArr = ["a", "b", "c"];
// testArr.myTest();
// console.log(testArr)


// // Map
//Example 1
// var arr1 = [2, 3 , 9, 16]; //index 0 ... 3
// //old way
// var temp = [];
// for(let i = 0; i < arr.length; i++) {
//     temp.push(arr[i] * 2);
// };
// console.log(temp);
// //using array method
 
// const result = arr1.map( x => x * 2);
// console.log(result);
//Example 2
// //with function defination
// var counter = 0;
// var newArr = arr1.map(myFunction); // arr1 : 2,3,9,16
// console.log(newArr);
// function myFunction(num) {
//     // console.log(counter);
//     // counter++;
//     return num * 10;
// };


//Example 3
// var person = [
//     {firstName: "John", lastName: "Doe"},
//     {firstName: "Jane", lastName: "Frye"},
//     {firstName: "Sabine", lastName: "Ebert"}
// ]

// console.log(person.map(getFullName))
// function getFullName(item) {
//     return [item.firstName, item.lastName].join(" ");

// }

//Example 4

// arr1 = [2, 3, 9, 16];
// var x = arr1.map(Math.sqrt);
// console.log(x)


//Reduce Method
// The reduce() method reduces the array to single value;
//The reduce() method executes a provided function for each value os the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).
//Note: reduce() does not execute the function for array elements without values.
//Note: this method does not change the original array.

//array.reduce(function(total, currentValue. currentIndex, arr))


var numbers = [50, 60, 70, 10];
var resultOut = numbers.reduce(myReduceFunc);
function myReduceFunc(total, num)
{
    console.log(`Total : ${total} and Num:${num}`);
    return total + num //total = 50+60 = 110 total = 110+70 =180 total = 180+10=190
}
console.log(resultOut)

//Example 2

const euros = [29.76, 41.85, 46.51];

const average = euros.reduce((total, amount, index, array)=> {
    console.log(`Total : ${total} and Amount : ${amount}`)

    total += amount;
    console.log(`Total :${total}`);
    if(index==array.length-1)
    return total/array.length
    else return total;
})
console.log(average)

//Example 3
// reduce adding the initial value
const averageAddInitial = euros.reduce((total, amount, index, array)=> {
    console.log(`Total : ${total} and Amount : ${amount}`)

    total += amount;
    console.log(`Total :${total}`);
    if(index==array.length-1)
    return total/array.length
    else return total;
},5)
console.log(averageAddInitial)


//Example 4 : [29.76, 41.85, 46.5];

const averageAddInitialArr = euros.reduce((total, amount, index, array) =>{

    total.push(amount);
    if(index==array.length-1){
        var average = 0, temp =[];
        for(i=0; i<total.length; i++){
            console.log("i=>" + total[i]);
            average += total[i];

        }
        temp.push(average/array.length);
        return temp;
    }
else {
    return total
}
}, []);
console.log(averageAddInitialArr);

//Example 5

const dataArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatValues = dataArr.reduce((total, value)=>{

    console.log(`Total : ${total} and value : ${value}`)
    return total.concat(value);
}, []);
console.log(flatValues);

//Task: reduce Method
const fruitBasket = ["banana", "cherry", "orange", "apple", "cherry", "orange", "apple", "banana", "cherry", "orange", "fig"]

// output : {banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}

const calculateFruits = fruitBasket.reduce((total, value, index, array) => {



//Solution 1
//  total[value] = array.filter((v)=> (v === value)).length;
//Solution 2
// total[value] = (total[value]||0)+1;
//Solution 3
(value in total) ? total[value]++ : total[value] = 1;
    return total;

}, {});

console.log(calculateFruits)



