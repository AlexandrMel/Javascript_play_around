// // // //Lets go deeper to create class

// // // // function Animal (name, energy);
// // // //{
// // // //let animal = Object.create(Animal.prototype);
// // // // animal.name = name;
// // // // animal.energy = energy;
// // // //return animal;
// // // //}
// // // // we can also create instance of the function/class or object using "new" keyword hold the all the references of that object.

// // // // // we have  removed Object.create and used "new" keyword from the previous prototype example.


// // // // function Animal ( name, energy) {
// // // // // let animal = Object.create(Animal.prototype);
// // // // this.name = name;
// // // // this.energy = energy;
// // // // //return animal;
// // // // }

// // // // Animal.prototype.eat =  function(amount) {
// // // //     console.log(`${this.name} is eating`);
// // // //     this.energy += amount;
// // // // }
// // // // Animal.prototype.sleep =  function(length) {
// // // //     console.log(`${this.name} is sleeping`);
// // // //     this.energy += length;
// // // // }
// // // // Animal.prototype.play =  function(length) {
// // // //     console.log(`${this.name} is playing`);
// // // //     this.energy += length;
// // // // }

// // // // //const leo = Animal("Leo", 7);
// // // // //const snoop = Animal("Snoop", 10);
// // // // //console.log(leo)//undefined;

// // // // const leo = new Animal("Leo", 7);
// // // // const snoop = new Animal("Snoop", 10);
// // // // console.log(leo); // return object



// // // //Pseudoclassical Instantiation
// // // //Constructor
// // // //Object reference
// // // //combine all methods into one bucket/basket - Class

// // // //A class is a type of function, but instead of using  the keyword function to initiate it, we use the keyword class, and properties is assigned inside a constructor() method.
// // // //Use the keyword class to create a class, and always add a constructor method.
// // // //The constructor method is called each time the class object is initialized.
// // class Animal {
// //     constructor(name, energy) {
// //         console.log('constructor...');
// //         this.name = name;
// //         this.energy = energy;
// //     }
// //     eat (amount) {
// //         console.log(`${this.name} is eating`);
// //         this.energy += amount;
// //     }
// //     sleep (length) {
// //         console.log(`${this.name} is sleeping`);
// //         this.energy += length;
// //     }
// //     play (length) {
// //         console.log(`${this.name} is playing`);
// //         this.energy -= length;
// //     }
// // };
// // // const leo = new Animal('Leo', 7); // leo instance of the Animal class or leo is object  
// // // const snoop = new Animal('Snoop', 10);
// // // console.log(leo);
// // // leo.eat(10);
// // // console.log(leo);


// // //Every object has own storage/reference area in the memory
// // const firstObj = new Animal();

// // console.log(firstObj);

// // const secondObj = new Animal("second", 1);

// // firstObj.name="first";
// // firstObj.energy= 2;

// // console.log(secondObj);

// // console.log(firstObj);
// // firstObj.name = "replace";
// // firstObj.energy = 3;
// // console.log(firstObj);
// // firstObj.eat(5);
// // console.log(firstObj);

// // //const test = new Animal();
// // // const leoObj = new Animal("Leo", 7); // leo instance of the Animal class or leo is object of this Animal class
// // //const snoopObj = new Animal("Snoop", 10);
// // //leoObj.eat(5);
// // //console.log(leoObj.name); //Leo;
// // //console.log(snoopObj.name);
// // //console.log(leoObj);


// // //Static Methods
// // //Static methods are defined on the class itself, and not on the prototype/object. That means you cannot call a static method on the object

// // // Task :  Create a class called Person which accepts the name of a person as a string, and his/her age as a number.
// // // The Person class should have a method called describe which returns a string with the following syntax: "name, age years old". So for example, if John is 19 years old then the function describe of his object will return "John, 19 years old".

// // class Person {
// //     constructor(name, age){
// //         this.name = name;
// //         this.age = age;
// //     }
// //     describe() {
// //         console.log(`${this.name}, ${this.age} years old`);
// //     }

// // };

// // const John = new Person("John", 19);
// // John.describe();


// // // Task :
// // // Create a class called Student which accepts the name of a student as string, and his/ her class name as string.
// // // The Student class should have the following methods
// // // fullName : John Doe
// // // address  : vulkenstr 1, 2341, Berlin
// // // Subjects : return all the subjects which currently studying like ‘Web’, ‘Math’, ‘Science’ etc
// // // birthDate : need to pass the year and store this year in this object’s property birthDate.
// // // age: it will return the age of the student, you no need to pass anything in this method but birthDate will take from previously stored from the object property.


// // class Student {
// // constructor(name, classy, address, birthDate){
// //     this.fullName = name;
// //     this.address = address;
// //     this.birthDate = new Date(birthDate);

// // }
// // Subjects() {
// //     console.log(`Web, Math, Science`);
// // }
// // Age(birthDate) {
// //     console.log(2019 - this.birthDate.getFullYear());
// // }
// // }
// // const Stud = new Student("John Doe", "fb15", "vulkenstr 1, 2341, Berlin", "1988-08-09");
// // Stud.Age();
// // console.log(Stud.address);
// // Stud.Subjects();



// //Create Class validateCreditCard and constructor accept the card number.
// //Class contain one method validate and it decide card number is valid or not.
// // Here are the rules for a valid number:
// // Number must be 16 digits, all of them must be numbers
// // You must have at least two different digits represented (all of the digits cannot be the same)
// // The final digit must be even
// // The sum of all the digits must be greater than 16

// class ValidateCreditCard {
//     constructor(card_num) {
//         this.card_num = card_num;
//     }

//     // validate(card_num) {
//     //     return card_num.length === 16 && card_num%2==0 && card_num.split("").map(Number).reduce(function(a, b){return a+b}) > 16 && [...new Set(card_num.split(""))].length > 1


//     // }};
//     validate(card_num) {
//         // console.log(card_num.length === 16)
//         console.log(Number.isInteger(Number.parseInt(card_num)))
//         // console.log(Number(card_num[card_num.length-1])%2==0)
//         // console.log(card_num.split("").map(Number).reduce(function(a, b){return a+b}) > 16)
//         // console.log(card_num.split("").filter(function(item, index){return card_num.indexOf(item) >= index;}).length > 1)
//         // console.log(Number.isInteger(Number.parseInt(card_num)))
//         // Number must be 16 digits, all of them must be numbers
//         return card_num.length === 16 &&
//             Number.isInteger(Number.parseInt(card_num)) &&
//             // The final digit must be even
//             Number(card_num[card_num.length - 1]) % 2 == 0 &&
//             // The sum of all the digits must be greater than 16
//             card_num.split("").map(Number).reduce(function (a, b) {
//                 return a + b
//             }) > 16 &&
//             // You must have at least two different digits represented (all of the digits cannot be the same)
//             card_num.split("").filter(function (item, index) {
//                 return card_num.indexOf(item) === index;
//             }).length > 1


//     }
// };
// const obj = new ValidateCreditCard();

// //test
// console.log(obj.validate('9999777788880000')); //true
// console.log(obj.validate('6666666666661666')); //true
// console.log(obj.validate('a92332119c011112')); //false
// console.log(obj.validate('4444444444444444')); //false
// console.log(obj.validate('1211111111111112')); //true







// // Calculate Vacation days
// // create a class called companyEmployee which accepts name as a string and remainingVacationDays as a number (20)
// // The class should have the following methods
// // >> name
// // >> remainingVacationDays
// // >> takeVacationDays with daysOff as a parameter
// // Output:
// // create a object with a employee name
// // call this name with a number of days off in order to output 15 remainingVacationDays afterwards


// class CompanyEmployee {
//     constructor(name, remainingVacationDays) {
//         this.name = name;
//         this.remainingVacationDays = remainingVacationDays;
//     }

//     takeVacationDays(num) {
//         return this.remainingVacationDays -= num;
//     }


// }
// const Alex = new CompanyEmployee("Alex", 20);
// console.log(Alex.takeVacationDays(5))


// function filterList(l) {
//     return l.filter(x => Number.isInteger(x));
// }
// console.log(filterList([1, 2, 3, "a", "b", 4]))
// console.log(filterList(["A", 1, '&amp', 0, -9, 'Edabit']))


// //Task:. Even Number Generator
// //Create a class EvenNumberGenerator  with method  evenNumbers that finds all even numbers from 1 to the given number.
// //
// //Examples:
// //evenNums(8) ➞ [2, 4, 6, 8]
// //evenNums(4) ➞ [2, 4]
// //evenNums(2) ➞ [2]
// //
// //If there are no even numbers, return an empty array.
// console.log(`===========================================`)
// class EvenNumberGenerator {
//     constructor(startnum) {
//         this.even = [];
//         this.startnum = startnum;
//     }

//     evenNumbers(numi) {
//         return [...Array(numi+1).keys()].filter(x => x%2 == 0)
//         // for (var i = 0; i <= startnum; i++) {
//         //     if (i % 2 == 0) {
//         //         this.even.push(i);
//         //     }

// //         // }
// //         // return this.even;
// //     }
// // }
// // let evenNum = new EvenNumberGenerator();
// // console.log(evenNum.evenNumbers(20));
// // console.log(evenNum.even)
// // console.log([...Array(9).keys()])

// // // ======================================Encapsulation=======================================================
// // // One of the core concepts of OOP is encapsulation.
// // //An important part of encapsulation is that data (object properties) should not be directly accessed or modified from outside the object.
// // //To access or modify a property we would use a getter (access) or a setter (modify), which are specific methods we define in our class.
// // //Currently there is no native support for private properties in JavaScript (it is possible to mimic private properties but we’re not going to go into that). So all the properties we’ve declared can be directly accessed from outside the object.


// // class User {
// //     constructor(name, age, email){
// //         this.fullName = name;
// //         this.age = age;
// //         this.email = email;
// //     }

// //     get name(){
// //         console.log("get name ...");
// //         return this.fullName;
// //     }
// //     set name(newName){
// //         console.log(`set name ...`);
// //         this.fullName=newName;
// //     }

// // }
// // typeof(User);

// // const objUser = new User("John", 38, "email@email.com");
// // console.log(objUser.name);
// // objUser.name ="test"; // this is called the et method
// // console.log(objUser.name) // this is called the get method
// // //------------------- Inheritance ------------------------------
// // //Inheritance: Classes can also inherit from other classes. The class being inherited from is called the parent, and the class inheriting from the parentis called the child. In our example, another class, let’s say Administrator, can inherit the properties and methods of the User class:
// // //To create a class inheritance, use the extends keyword.
// // //User class= Parent  and Administrator class = child

// // //There are a few things to keep in mind when using super():
// // // You can only use super() in a derived class. If you try to use it in a non-derived class (a class that doesn’t use extends) or a function, it will throw an error.
// // // You must call super() before accessing this in the constructor. Since super() is responsible for initializing this, attempting to access this before calling super() results in an error.
// // // The only way to avoid calling super() is to return an object from the class constructor.

// // class Administrator extends User {
// //     constructor(name, age, email, role){
// //         super(name, age, email)//its calling User class constructor
// //         this.role = role;
// //     }
// //     get rolePermission(){
// // //         console.log(`get role...`);
// // //         return this.role;
// // //     }
// // //     set rolePermission(newRole){
// // //         console.log(`set role...`);
// // //         this.role=newRole;
// // //     }
// // // }

// // // const objAdmin = new Administrator("Sara", 25, "email@email", "Admin");
// // // console.log(objAdmin.name);//Sara
// // // console.log(objAdmin.rolePermission); //Admin




// // // function getStudentNames(students) {
// // // 	var resu =[]
// // //     Array.from(students).filter(x => resu.push(x.name))
// // //     return resu
// // // }

// // // console.log(getStudentNames([
// // //     { name: "Steve" },
// // //     { name: "Mike" },
// // //     { name: "John" }
// // //   ]))

// // //   function progressDays(runs) {
// // //       var res = 0
// // //       for(i=0;i<runs.length;i++){
// // //           if(runs[i+1]-runs[i]>0) res++;
// // //       }
// // //       return res;
// // // }
// // // console.log(progressDays([10, 11, 12, 9, 10]));

// // // function removeFirstLast(str) {
// // // 	return str.split("").splice(1,str.length-2).join("")
// // // }

// // // console.log(removeFirstLast("hello"))

// // // function dictionary(initial, words) {
// // // 	return words.filter(x => x.slice(0, initial.length) === initial);
// // // }
// // // console.log(dictionary('bu', ['button', 'breakfast', 'border']))


// // function combinations(items) {
// // 	return [...arguments].filter(x => x !== 0).reduce((a, b)=>a*b)
// // }

// // console.log(combinations(5, 6, 7))

// // function rolls(arr) {
// //     var result = [...arr];
// // for(i=0;i<arr.length; i++){arr[i] === 1?result[i+1]= 0: arr[i] ===6? result[i+1] = arr[i+1]*2: arr[i];}
// // console.log(result)
// // return result.filter(x => !isNaN(x)).reduce((a, b)=> a+b)

// // }
// // console.log(rolls([5,1,6,1,6]))

// // function averageWordLength(str) {
// // 	return (str.replace(/[^a-zA-Z]/ig, "").split(" ").reduce((a, b) => a+b.length, 0)/(str.split(" ").length)).toFixed(2)
// // }

// // console.log(averageWordLength('Working on my tan right now.'))


// // function decodeMorse(str) {
// // 	let morseCode = {
// //     "-----" : "0",
// //     ".----" : "1",
// //     "..---" : "2",
// //     "...--" : "3",
// //     "....-" : "4",
// //     "....." : "5",
// //     "-...." : "6",
// //     "--..." : "7",
// //     "---.." : "8",
// //     "----." : "9",
// //     ".-" : "a",
// //     "-..." : "b",
// //     "-.-." : "c",
// //     "-.." : "d",
// //     "." : "e",
// //     "..-." : "f",
// //     "--." : "g",
// //     "...." : "h",
// //     ".." : "i",
// //     ".---" : "j",
// //     "-.-" : "k",
// //     ".-.." : "l",
// //     "--" : "m",
// //     "-." : "n",
// //     "---" : "o",
// //     ".--." : "p",
// //     "--.-" : "q",
// //     ".-." : "r",
// //     "..." : "s",
// //     "-" : "t",
// //     "..-" : "u",
// //     "...-" : "v",
// //     ".--" : "w",
// //     "-..-" : "x",
// //     "-.--" : "y",
// //     "--.." : "z",
// //     ".-.-.-" : ".",
// //     "--..--" : ",",
// //     "..--.." : "?",
// //     "-.-.--" : "!",
// //     "-....-" : "-",
// //     "-..-." : "/",
// //     ".--.-." : "@",
// //     "-.--." : "(",
// //     "-.--.-" : ")",
// //     " " : " ",
// //     "---..." : ":",
// //     ".----." : "'",
// //     "undefined": "_"
// //   }
// // 	return str.split(" ").map(x => morseCode[x]).join(" ").toUpperCase().split("  ").map(y => y.split(" ").join("")).join(" ")
// // }

// // console.log((decodeMorse(".----   .- .--. .--. .-.. .   .- -. -..   .....   -.-. .... . .-. .-. -.-- --..--   --...   ... .- -. -.. .-- .. -.-. .... . ... --..--   ..---   - .- -... .-.. . ... --..--   ----.   .. -. ...- .. - . -..   --. ..- -.-- ...   -.-.--   - .... .- - .----. ...   ... ---   -.-. --- --- .-.. .-.-.- .-.-.- .-.-.-")))


// // function isFullHouse(hand) {
// //     hand = hand.sort((a, b)=> return b-a);
// //     console.log(hand)
// // 	return hand.filter(x => x=== hand[0]).length - hand.filter(x => x=== hand[4]).length ===-1 ||
// // 		hand.filter(x => x=== hand[0]).length - hand.filter(x => x=== hand[4]).length === 1 
// // }
// // console.log(isFullHouse(['3', 'J', 'J', '3', '3']))


// function cumulativeSum(arr) {
//    var sum = 0;
//    return arr.map(x => sum+= x);
// }

// //cumulativeSum([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2])
// console.log(cumulativeSum([3, 3, -2, 408, 3, 3, 0, 66, 2, -2, 2, 3, 4, 2, -47, 3, 3, 2]))

// function splitAndDelimit(str, num, del) {
// // 	var n=0;
// // 	  for(i=1;i<str.length;i++){
// // str = str.replace(str[i*num+n], del+str[i*num+n])
// // 			n+=1;
// //     }

// //     return str
// return str.split("").map((x,i)=> i%num === 0 && i>0? del+x: x).join("")

// }
// console.log(splitAndDelimit("bellow", 2, "&"));
// console.log(splitAndDelimit("poisonous", 2, "~"))

// function bugger(num) {
// 	var result = 0;
// while(num.toString().length>1){
//     console.log(num)
//     num = num.toString().split("").reduce((a, b)=> Number(a)*Number(b));
//     console.log(num)
//     console.log(result)
//     result++;
// }
// 	return result;
// }

// console.log(bugger(39))


// function isIcecreamSandwich(str) {
// 	return [...new Set(str.split(""))].length === 2 && str.split("").reverse().join("")=== str;
// }

// console.log(isIcecreamSandwich("hhhhhhhhmhhhhhhhh"))


// function primeNumbers(num) {
// 	let acc = [];
// 	for(i=2;i<num;i++){
//         if(2*i<=num){acc.push(2*i)}
//         if(3*i<=num){acc.push(3*i)};
// 	}
// 		return [...Array(num+1).keys()].slice(2).filter(x=> !acc.includes(x))
// }

// console.log(primeNumbers(10) )


// function unmix(str) {

//     let result = str.split("").map((x, i)=> i%2===0 && i<str.length-1? (str[i+1]+x):x).filter((x)=> x.length == 2).join("");
//     return str.length%2===0? result: result+str[str.length-1]
// }

// console.log(unmix('badce'));

// function lengthen(str1, str2){
//     return str1.length > str2.length? Array(str1.length).fill(str2).join("").slice(0, str1.length): Array(str2.length).fill(str1).join("").slice(0, str2.length)
// }
// console.log(lengthen("abcdefg", "ab"))

//     function battleOutcome(num) {
//         console.log(num[1])
//         return num.toString().split("").map((x,i)=> i%2===0 && Number(x)>Number(num.toString()[i+1])? x: num.toString()[i+1]).filter((x, i) => i%2===0);
//     }


// console.log(battleOutcome(5289))

function countLayers(rug) {
    let result = rug[Math.ceil((rug.length)/2)-1].split("").slice(Math.ceil(rug[Math.ceil((rug.length)/2)].length/2)-1)
    return result.filter((x, i) => x !== result[i+1]).length
}
console.log(countLayers([
    "AAAAAAAAAAA", 
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCDDDCBAA",
    "AABCDDDCBAA", 
    "AABCDDDCBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"]))

    console.log(countLayers([
        "AAAAAAAAAAA", 
        "AABBBBBBBAA",
        "AABCCCCCBAA",
        "AABCAAACBAA",
        "AABCADACBAA", 
        "AABCAAACBAA",
        "AABCCCCCBAA",
        "AABBBBBBBAA",
        "AAAAAAAAAAA"]))

        console.log(`======`)
console.log(countLayers([
    "AAAAAAAAAAA", 
    "AABBBBBBBAA",
    "AABCCCCCBAA",
    "AABCAAACBAA",
    "AABCADACBAA", 
    "AABCAAACBAA",
    "AABCCCCCBAA",
    "AABBBBBBBAA",
    "AAAAAAAAAAA"]))

    console.log(countLayers([
        "FFFFFFFFFFFFFFFFFFFFFFFFF",
        "FFFFFFFFFFFFFFFFFFFFFFFFF",
        "FFFFGGGGGGGGGGGGGGGGGFFFF",
        "FFFFGGGAAAAAAAAAAAGGGFFFF", 
        "FFFFGGGAABBBBBBBAAGGGFFFF",
        "FFFFGGGAABCCCCCBAAGGGFFFF",
        "FFFFGGGAABCDDDCBAAGGGFFFF",
        "FFFFGGGAABCDDDCBAAGGGFFFF", 
        "FFFFGGGAABCDDDCBAAGGGFFFF",
        "FFFFGGGAABCCCCCBAAGGGFFFF",
        "FFFFGGGAABBBBBBBAAGGGFFFF",
        "FFFFGGGAAAAAAAAAAAGGGFFFF", 
        "FFFFGGGGGGGGGGGGGGGGGFFFF", 
        "FFFFFFFFFFFFFFFFFFFFFFFFF", 
        "FFFFFFFFFFFFFFFFFFFFFFFFF"]))
        console.log(countLayers([
            "AAAAAAAAA", 
            "ABBBBBBBA", 
            "ABBBBBBBA", 
            "ABBBBBBBA", 
            "AAAAAAAAA"]))
            console.log(countLayers([
                "AAAAAAAAA", 
                "ABBBBBBBA", 
                "ABBAAABBA", 
                "ABBBBBBBA", 
                "AAAAAAAAA"]))

                console.log(countLayers([
                    "AAAAAAAAAAA", 
                    "AABBBBBBBAA",
                    "AABCCCCCBAA",
                    "AABCDDDCBAA",
                    "AABCDDDCBAA", 
                    "AABCDDDCBAA",
                    "AABCCCCCBAA",
                    "AABBBBBBBAA",
                    "AAAAAAAAAAA"]))