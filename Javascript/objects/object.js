var myCar = {
    //key: value;
    make: "Ford",
    model: "Mustang",
    year: "1999"
}
var myCar = {};
myCar.make = "Ford"
myCar.model = "Mustang"
myCar.year = "1888"

console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

let persInfo = {
    firstName: "Alex",
    lastName: "Miller",
    age: 31,
    city: "Berlin"
}

console.log(persInfo.firstName); // "Alex"


var family = {
    children: [{
        age: 3,
        name: "paul"
    }, {
        age: 4,
        name: "susie"
    }],
    father: "peter",
    mother: "Lila"
};

family.bruder = "Vadim";
family.children[3] = "HoHoHo";
delete family.bruder
family.mother = { age: 5, name: "John"}
family.father = [{ age: 5, name: "John"}]
console.log(family);
console.log(family.children[0].name);
var arr = [ "string", {age: 4, name: "alex"}]
console.log(typeof(arr))
console.log(arr[1].name)
arr[1].name


let fruit = "kiwi";
let fruitBUcket = {
    [fruit]: 5,
}

console.log(fruitBUcket.kiwi);
console.log(fruit);

console.log('==============================')
let obj = {
    for : 1,
    let : 2,
    return : 3
};
console.log(obj.for + obj.let + obj.return);
let obj1 = {
    for : 'return',
    let : 2,
    return : 3
};
console.log(obj1.for + obj1.let + obj1.return);
let obj2 = {
    for : 1,
    let : 'return',
    return : 3
};
console.log(obj2.for + obj2.let + obj2.return);
console.log('===================================');
//Comparing objects
console.clear();
console.log('Comparing Objects');
let obj4 = {
    name : {
        firstName : 'John',
        lastName : 'Schulz'
    },
    age : 32
};
let obj5 = {
    name : {
        firstName : 'John',
        lastName : 'Schulz'
    },
    age : 32
};
console.log(obj4==obj5); //false

// Looping through an object
//First you have to convert  the object in to an array
// There are 3 methods to do that
// object.keys
//object,values
//object.entries

//1. Object.keys creates an array that contains the properties of the obejects

const fruits = {
    apple: 28,
    orange: 17,
    pear: 54
};

const keys = Object.keys(fruits)
console.log(keys)

for(i=0;i<keys.length; i++) {
    console.log(keys[i]);
}
for(i=0;i<Object.keys(fruits).length; i++) {
    console.log(Object.keys(fruits)[i]);
}

//Case 2
console.log(`Case 2   ============================`)
// For of loop
for(const key of keys){
    console.log(key)
}

//Case 3
console.log(`Case 3   ============================`)
//foreach function array.forEach(function(currentValue, index, arr), thisValue)
console.log(keys);
keys.forEach(displayKeys)
function displayKeys (item, index, keys){
    console.log(`${item} ${index} ${keys}`)

}
console.log(`===============================`)
keys.forEach((item, index, keys) => {
    console.log(`${item} ${index} ${keys}`)
});




var lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
    alcohol: false,
    item: 4
};
console.log(Object.keys(lunch))
Object.keys(lunch).forEach(function (item) {
	// console.log(item); // key
     console.log(lunch[item]); })
     
    //  console.log(lunch[item]);

    //2. Object.values creates an array that contains the values of the obejects

    const values = Object.values(fruits);
    console.log(values);
i = 0;
    for(const item of values) {
        values[i] = "item"
        fruits[item] = fruits[item] + "test"
        console.log(item);
        i++;
    }
    console.log(fruits)

//Object.entries creates an array within an array (an array of array)Each inner array has two item. The forst item is the  property and second is the value.

const entries = Object.entries(fruits);
console.log(entries);
i = 0;
for(const item of entries) {
    console.log(item[0])
    console.log(item[1])
}
console.log(`=========================`)
entries.forEach(([KEYS, VALUES], index) => {
    console.log(KEYS);
    console.log(VALUES);
});
// console.log(fruits)


// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
// Sample Output: name, sclass, rollno
const listOfProperties = student => {
    var result = Object.keys(student).toString();
    return result;
}
console.log(listOfProperties(student));
Object.entries(student).forEach(([item, value]) => {
    var res = "";
res += item + ",";
console.log(res)
});

for( prop in student){ 
    var res = "";
    res += prop + ",";
    console.log(res)
}




// #### 1. Check if a number is within a given range
// Write a program that checks if a number is within the range of an object's min and max properties.
// Examples:
// * 4, { min: 0, max: 5 }) ➞ true
// * 4, { min: 4, max: 5 }) ➞ true
// * 4, { min: 6, max: 10 }) ➞ false
// * 5, { min: 5, max: 5 }) ➞ true
// * Notes: Assume min <= max is always true.

function calcMin(num, obj) {
    var res = obj.min <= num && num <= obj.max;    
console.log(res)}

calcMin( 4, { min: 0, max: 5 });
calcMin( 4, { min: 4, max: 5 });
calcMin( 4, { min: 6, max: 10 });
calcMin( 5, { min: 5, max: 5 });


