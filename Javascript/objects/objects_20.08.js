//Object Methods
//A method is a function stored as property in object

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

console.log(person.fullName());

const personOne = {
    name: "John",
    dateOfBirth: 2000,
    age(dateOfBirth) {
        const today = new Date();
        const year = today.getFullYear();
        const age = year - this.dateOfBirth;
        return age;
    }
};
console.log(personOne.age());

const personTwo = {
    isHuman: false,
    obj: {
        name: "Alex",
        lastName: "two"
    },
    name: "test",
    displayIntroduction: function () {
        console.log(`My name is ${this.name}, Am i human ${this.isHuman}`)
        console.log(`My name is ${this.obj.name}, Am i human ${this.isHuman}`)
    }
};
personTwo.displayIntroduction();


//Object.create method
const me = Object.create(personTwo);
me.name = "John";
me.isHuman = true;
me.displayIntroduction();

//Exercise 3: Return Keys and Values
// Write a program that takes an object and returns the keys and values in separate arrays.
// Examples:
// * { a: 1, b: 2, c: 3 } ➞ ["a", "b", "c"], [1, 2, 3]
// * {key: true} ➞ ["key"], [true]
// Exercise 4. Scrabble

function divide(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    console.log(keys)
    console.log(values)
    console.log(`[${keys}], [${values}]`)
}
divide({
    a: 1,
    b: 2,
    c: 3
})
divide({
    key: true
})
// Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand.
// Example:
var arrr = [{
        tile: "N",
        score: 1
    },
    {
        tile: "K",
        score: 5
    },
    {
        tile: "Z",
        score: 10
    },
    {
        tile: "X",
        score: 8
    },
    {
        tile: "D",
        score: 2
    },
    {
        tile: "A",
        score: 1
    },
    {
        tile: "E",
        score: 1
    }
]
// The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28

function countSum(arr) {
    let res = 0;
    for (i = 0; i < arr.length; i++) {
        res += arr[i].score;
    }
    console.log(res)
}

countSum(arrr)

// Exercise 5 : Is it an empty object?
// Write a program that returns true if an object is empty, and false if otherwise.
// Examples:
// * {} ➞ true
// * {a: 1} ➞ false
function verify(obj) {
    return Object.keys(obj).length === 0; 
    // return !Object.keys(obj).length          ....transforms in boolean 
}
console.log(verify({}))
console.log(verify({
    a: 1
}))




// Exercise 6 : Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France".
const studentin = {
    firstName: "John",
    lastName: "Smith",
    class: 12 };

var person = {
    firstName: "John",
    lastName: "Wane",
    age: 31,
    job: "Web Developer",
    city: "Berlin"
}


function textIt(obj) {
    console.log(`I am ${obj.firstName} ${obj.lastName}, i am ${obj.age} years old, and i work as a ${obj.job} in ${obj.city}`)
}

textIt(person);
// Exercise 7 : Write a JavaScript program to delete the "class" property (or last property) from the previous object.

function deleteObj (obj){
    var toDelete = Object.keys(obj)[Object.keys(obj).length-1]
    console.log(toDelete)
 delete obj[toDelete]

  console.log(obj)
}
deleteObj(studentin)


// Exercise 8: Write a program to get the length of a JavaScript object.
function lengthObj(obj) {
    console.log(Object.entries(person).length)
}
lengthObj(person);




// Exercise 9 : Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.
const library = [
  {
      author: 'J.K. Rowling',
      title: 'Harry Potter and the Chamber of Secrets',
      readingStatus: true
  },
  {
      author: 'Homer',
      title: 'The Odyssey',
      readingStatus: true
  },
  {
      author: 'Harper Lee',
      title:  'To Kill a Mockingbird',
      readingStatus: false
  }];
// E.g. Output:
// Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
// Already read The Odyssey by Homer
// You still need to read To Kill a Mockingbird by Harper Lee

function readingStatus(obj) {
    for(i=0;i<obj.length;i++) {
        obj[i].readingStatus ? console.log(`Already read \"${obj[i].title}\" by \"${obj[i].author}\"`) : console.log(`You still need to read \"${obj[i].title}\" by \"${obj[i].author}\"`)
    }
}
readingStatus(library)

// ### Arrays
// 1. Leap Years
// Write a program which finds the leap years in a given range of years.
function leapYear(arrStart, arrEnd) {
    var  res = []
    for(i=arrStart;i<=arrEnd; i++){
      if((i % 100 === 0) ? (i % 400 === 0) : (i % 4 === 0)) {res.push(i)}
      console.log(res)}}
leapYear(1900, 2019);
// 2. First & Last
// Write a program that takes an array and returns the first and last elements as a new array.
// Expected Output:
// [5, 10, 15, 20, 25] ➞ [5, 25]
// ["javascript", 13, null, false, true] ➞ ["javascript", true]
// [undefined, 4, "6", "hello", null] ➞ [undefined, null]

function firstLast(arr) {
    // var result = [];
    // result.push(arr[0])
    // result.push(arr[arr.length-1])
    arr.splice(1, arr.length-2);
    console.log(arr);
}
firstLast([5, 10, 15, 20, 25])
firstLast(["javascript", 13, null, false, true])
firstLast([undefined, 4, "6", "hello", null])
// 3. Find the Smallest Number
// Write a program that takes an array of numbers and returns the smallest number in the set.
// E.g
// [34, 15, 88, 2] ➞ 2
// [34, -345, -1, 100] ➞ -345
// [-76, 1.345, 1, 0] ➞ -76
// [0.4356, 0.8795, 0.5435, -0.9999] ➞ -0.9999
// [7, 7, 7] ➞ 7


function smallestNum(arr) {
    return arr.sort(function(a, b){return a-b})[0]
    // return Math.min(...arr);
}
console.log(smallestNum([34, 15, 88, 2]))
console.log(smallestNum([34, -345, -1, 100]))
console.log(smallestNum([-76, 1.345, 1, 0]))
console.log(smallestNum([0.4356, 0.8795, 0.5435, -0.9999]))



// 4. Return Student Names
// Write a program that takes an array of students and returns an array of student names.
// Example:
// [ { name: "Steve"},
//  { name: "Mike"},
//  { name: "John"}
// ]
// ➞ ["Steve", "Mike", "John"]


function returnNames(arr) {
    var res = [];
    for(i=0;i<arr.length; i++){
res.push(Object.values(arr[i]))
    }
    console.log(res)
}
// 5. Spell it out
// Write a program which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
// E.g.
// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager"]

function sing(str) {
    var res = []
    for(i=0;i<str.length; i++){
        res.push(str.slice(0, i+1))
    }
    console.log(res);
}
sing("bee");
sing("happy");
sing("eagerly");



function cityFacts(city) {
	console.log(`${city.name} has a population of ${city.population} 
	and is situated in ${city.continent}`)
}
cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  })