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
var nums = [1, 2, 10, 2, 4, 5, 4, 7, 8, 7, 3, 6, 6, 6, 6, 6, 1, 9, 10, 10, 10, 10, "sprint", "Sprint"];
//Output nums= [1, 2, 3, 4, 5, 6,7,8]


function deleteDuplicates (arr) {
    arr = arr.sort((a, b) => a - b);
    for(i=0; i<arr.length; i++) {
    typeof(arr[i]) =="string" ? arr[i]=arr[i].toLowerCase() : arr[i];
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]))
        { arr.splice(i,1); i--};
    }
    console.log(arr);
}
deleteDuplicates(nums)