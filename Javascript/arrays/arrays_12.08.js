// //Write a program to compute the average marks of the following students Then, this average is used to determine the corresponding grade.
// //David    80
// //Vinoth 77
// //Divya    88
// //Ishitha 95
// //Thomas 68
// //
// //The grades are computed as follows :
// //Range    Grade
// //<60    F
// //<70    D
// //<80    C
// //<90    B
// //<100 A

var marks = [
    ["David", 80],
    ["Vinoth", 77],
    ["Divya", 88],
    ["Ishitna", 95],
    ["Thomas", 68]
];


function marksCalc(arr) {
    res = 0;
    for (i = 0; i < arr.length; i++) {
        res += arr[i][1];
    }
    res = res / i;
    if (res < 60) {
        console.log(`The general mark of the class is F`)
    } else if (res < 70) {
        console.log(`The general mark of the class is D`)
    } else if (res < 80) {
        console.log(`The general mark of the class is C`)
    } else if (res < 90) {
        console.log(`The general mark of the class is B`)
    } else {
        console.log(`The general mark of the class is A`)
    }
}
marksCalc(marks)




//2. Write a program to compute the sum and product of an array of integers.
var numbers = [2, 4, 5, 8, 9];

function sum_prod(arrr) {
    sum = 0;
    prod = 1;
    for (i = 0; i < arrr.length; i++) {
        sum += arrr[i];
        prod *= arrr[i];
    }
    console.log(`The sum of the array is: ${sum} \nThe product of the array is: ${prod}`)
}
sum_prod(numbers);



function findNb(m) {
    var sumi = 0;
    for (i = 1; i < 10000; i++) {
        sumi += Math.pow(i, 3);
        if (sumi == m) return i;
    }
    return (-1);
}
console.log(findNb(1071225));
console.log(findNb(4183059834009));
console.log(findNb(24723578342962));

//3. Write a program which prints the elements of the following array:
let arry = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
//Sample Output:
//"row 0"
//" 1"
//" 2"
//" 1"
//" 24"
//"row 1"
//" 8"
//" 11"
//" 9"
//" 4"

function printArr(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(`Row ${i}`)
        for (j = 0; j < arr[i].length; j++) {
            console.log(`${arr[i][j]}`);
        }
    }
}
printArr(arry);

function findUniq(arr) {
    // do magic
    if (arr[0] !== arr[1] && arr[1] == arr[2]) {
        console.log(`The unique number is: ${arr[0]}`)
    } else
        for (i = 2; i < arr.length; i++) {
            if (arr[0] !== arr[i]) {
                console.log(`The unique number is: ${arr[i]}`)
            }
        }
}
findUniq([0.89, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(`=======================================`)


//Missing Number
//Create a function that takes an array of numbers between 0 and 10 (excluding one number) and returns the missing number.
//Examples:
//missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
//missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
//missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
//===========================================================================
// CASE 1
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const missing = arr => {
//     let sum = 55;
//     for(let i=0; i<arr.length; i++){
//         sum-= arr[i];
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const missing = arr => {
//============================================================================
//     //CASE 2
//     arr = arr.sort(function(a, b){
//         return a-b;
//     });
//     for(let i=0; i<numbers.length; i++){  
//             if(arr[i] != numbers[i]) return numbers[i];            
//     }
//============================================================================
//CASE 3
//     arr.push(0);
//     let sortedArray = arr.sort();
//     if(sortedArray[2]==10)
//     {
//         sortedArray.splice(2,1);
//     }
//     else
//     {
//         return 10;
//     }
//     for(let i=0; i<sortedArray.length; i++){  
//             if(i != sortedArray[i]) return i;            
//     }
// }
// console.log(missing([1, 2, 3, 4, 6, 7, 8, 9, 10]));
// console.log(missing([7, 2, 3, 6, 5, 9, 1, 4, 8]));
// console.log(missing([10, 5, 1, 2, 4, 6, 8, 3, 9]));
//============================================================================
// CASE 4

// function findMissingItem(arr, numbers) {
//     for (i = 0; i < numbers.length; i++) {
//         if (arr.indexOf(numbers[i]) == -1) return numbers[i];
//     }
//     return `No missing Item!`;
// }
// console.log(findMissingItem([1, 2, 3, 4, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(findMissingItem([7, 2, 3, 6, 5, 9, 1, 4, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(findMissingItem([10, 5, 1, 2, 4, 6, 8, 3, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//=============================================================================
//CASE 5

function missingNumber(arr) {
    arr = arr.sort((a, b) => a - b);

    console.log(arr)
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] !== (i + 1)) {
            return i + 1;
        }
    }

}
console.log(missingNumber([1, 3, 5, 4, 9, 7, 8, 10, 6]))
console.log(missingNumber([2, 3, 5, 4, 9, 7, 8, 10, 6]))
console.log(missingNumber([1, 3, 5, 4, 2, 7, 8, 9, 10]))
console.log(missingNumber([17, 3, 5, 4, 6, 7, 8, 9, 2, 11, 12, 13, 14, 15, 16, 20, 18, 19, 10]))
// missingNumber([7, 2, 3, 6, 5, 9, 1, 4, 8])
// missingNumber([1, 3, 5, 2, 9, 7, 4, 10, 6])
// missingNumber([6, 3, 5, 2, 9, 7, 4, 10, 1])


//Remove duplicate items from an array (ignore case sensitivity).
var nums = [1, 2, 10, 2, 4, 5, 4, 7, 8, 7, 3, 6, 6, 6, 6, 6, 1, 9, 10, 10, 10, 10, 10, 10, 10, 10, "sprint", "Sprint"];

function deleteDuplicates(arr) {
    arr = arr.sort((a, b) => a - b);
    for (i = 0; i < arr.length; i++) {
        typeof (arr[i]) == "string" ? arr[i] = arr[i].toLowerCase(): arr[i];
        if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
            arr.splice(i, 1);
            i--
        };
    }
    console.log(arr);
}
deleteDuplicates(nums)


//Create a function that takes an array of numbers and return the number that's unique.
//Examples:
// uniqueNum([3, 3, 3, 7, 3, 3]) ➞ 7
// uniqueNum([0, 0, 0.77, 0, 0]) ➞ 0.77
// uniqueNum([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0


// function uniqueNum(arr) {
//     let Result = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
//             Result.push(arr[i])
//         }
//     }
//     console.log(Result);
// }


// function uniqueNum(arr) {
//     arr = arr.sort((a, b) => a - b);
//     if(arr[0] === arr[1]) {
//         console.log(arr[arr.length-1])
//     }
//     else { console.log(arr[0])}
// }

// uniqueNum(arr){
//     for(i=0;i<arr.length; i++){

//     }

// }

// uniqueNum([3, 3, 3, 7, 3, 3]);
// uniqueNum([0, 0, 0.77, 0, 0]);
// uniqueNum([0, 1, 1, 1, 1, 1, 1, 1, 1])



//Create a function toCamelCase() that takes a single string and convert it into camelCase from snake_case.
//Examples:
//toCamelCase("hello_world") ➞ "helloWorld"
//toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"


function toCamelCase(str) {
    str = str.split("_");
    for (i = 1; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
    }
    str = str.join("");
    console.log(str)
}
toCamelCase("hello_world")
toCamelCase("javascript_is_fun")



//Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns //either true or false.
//* Return a boolean value (true or false).
//* The string can contain any character.
//* When neither an x nor an o is in the string, return true.
//
//Examples:
//XO("ooxx") ➞ true
//XO("xooxx") ➞ false
//XO("ooxXm") ➞ true (case insensitive)
//XO("zpzpzpp") ➞ true (returns true if no x and o)
//XO("zzoo") ➞ false

// function xO(str) {
//     str = str.toLowerCase();
//     var os = 0;
//     var xs = 0;
//     for (i = 0; i < str.length; i++) {
//         if (str[i] == "o") {
//             os += 1;
//         } else if (str[i] == "x") {
//             xs += 1;
//         }

//     }
//     if (xs == os) {
//         console.log(`True`);
//     } else {
//         console.log(`False`);
//     }
// }
function xO(str) {
    // str = str.toLowerCase();
    console.log((str.length - str.replace(/x/ig, "").length) == (str.length - str.replace(/o/ig, "").length) ? true : false)
    // console.log(((str.split("x").length-1) ==(str.split("o").length-1)) ? true : false)
}

xO("ooxx");
xO("xooxx");
xO("ooxXm");
xO("zpzpzpp");
xO("zzoo");


//8. Dictionary
//Create a function that takes in an initial word and filters out an array to contain words that start //with the same letters as the initial word.
//
//Examples
//dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
//dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
//dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
//
//**Notes**
//* If none of the words match, return an empty array.
//* Keep the filtered array in the same relative order as the original array of words.

//First Solution

// function dictio(str, arr) {
//     var res = []
//     for (i = 0; i < str.length; i++) {
//         if ((str + arr[i].substring(str.length)) == arr[i]) {
//             res.push(arr[i])
//         }
//     }
//     console.log(res);
// }

//Second Solution

// function dictio (str, arr) {
//     var res = []
//     for(i=0; i<arr.length; i++){
//         if(arr[i].includes(str)){
//             res.push(arr[i]);
//         }
//     }
//     console.log(res)
// }

function dictio(str, arr) {
    var res = 0;
    var res1 = []
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < str.length; j++) {
            if (str[j] == arr[i][j]) {
              res++;
            }
        }
        if (res == str.length) {
            res1.push(arr[i])
        }
        res = 0;
    }
    console.log(res1);
}
dictio("bu", ["button", "breakfast", "border"])
dictio("tri", ["triplet", "tries", "trip", "piano", "tree",])
dictio("beau", ["pastry", "delicious", "name", "boring",])

console.log(`==================================================`)

// 7. Pig Latin Translation
// Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. This is a basic form of "Pig Latin".

// **Rules**
// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.

// //Examples:
// pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay"
// pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay"
// pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay"

// //**Notes**
// //Be sure to preserve proper capitalization, ignore punctuation.

function pigLatin(str) {
    str = str.replace( /[^a-zA-Z ]/g , "").toLowerCase().split(" ");
var res = ""
for(i=0;i<str.length;i++){
    if(str[i][0].match(/[aeiou]/)) {
        res += str[i] + "way ";
    }
  else {res +=str[i].slice(1) + str[i][0] + "ay ";}
}
res = res[0].toUpperCase() + res.substring(1);
console.log(res)}

pigLatin("Ca.ts a.re gr/+++_ea.t pets.")
pigLatin("Tom got a small piece of pie.")
pigLatin("He told us a very exciting tale.")