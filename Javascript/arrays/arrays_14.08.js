function babylonian(a, b, c) {
    console.log(arguments[0])
    console.log(arguments[2])
    arguments[0] = "120"
    arguments[1] = arguments[1].toUpperCase();
    console.log(arguments[1])
}
babylonian(12, "Babylonian", "lol")
console.log(`=============================================`)
// function calculateMeans(...args){
//     let sum = 0;
//     // let gr =arguments[2]
//     // let mean = (a+b+c+d)/4;
//     for(i=0; i<args.length; i++){
//         sum = sum + args[i];
//     }
//     let res = sum / args.length;
//     console.log(res);
// }


calculateMeans(44, 33, 87, 99, 101, 200)
function calculateMeans(a, b, ...args){
    let sum = 0;
    // let gr =arguments[2]
    // let mean = (a+b+c+d)/4;
    for(i=0; i<arguments.length; i++){
        sum = sum + arguments[i];
    }
    let res = sum / arguments.length;
    console.log(res);
}


calculateMeans(44, 33, 87, 99, 101, 200)


// 9. Cubed
// Create a function that takes in an array of numbers and returns the sum of its cubes.
// Examples: 
//     sumOfCubes([1, 5, 9]) ➞ 855   //// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

// //**Note**
// //If given an empty array, return 0.

function cubes(arr) {
    var res = 0;
    for(i=0;i<arr.length;i++){
    res += Math.pow(arr[i], 3);
    }
    console.log(res);
}
cubes([1, 5, 9]);
cubes([1, 5, 9]);
cubes([2]);
cubes([]);

// //6. Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// Examples:
//   evenNums(8) ➞ [2, 4, 6, 8] 
//   evenNums(4) ➞ [2, 4]
//   evenNums(2) ➞ [2]

// //If there are no even numbers, return an empty array. 


function evenNum(num) {
    let res =[]
for(i=0;i<num; i++) {
    if(i%2 === 0) {
        res.push(i);
    }
}
console.log(res)
}
evenNum(8);
evenNum(4);
evenNum(2);