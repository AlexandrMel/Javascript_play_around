let i = 1;
do {
    console.log(`${i}`);

    i++;
}
while (i < 11);


console.log(`----------------------------------------`);

let nix = "";


for (i = 0; i < 5; i++) {
    nix = nix + "*";
    console.log(`${nix}`);

}
console.log(`----------------------------------------`);


for (i = 1; i <= 20; i++) {
    console.log(`This is iteration number ${i}`);
}

console.log(`----------------------------------------`);

for (i = 0; i < 34; i++) {
    if (i % 2 == 0) {
        console.log(`${i}`);
    } else {}
}
console.log(`----------------------------------------`);
for (i = 0; i < 34; i++) {
    if (i % 2 !== 0) {
        console.log(`${i}`);
    } else {}
}
console.log(`----------------------------------------`);
for (i = 0; i < 101; i++) {
    if (i % 6 == 0) {
        console.log(`${i}`);
    } else {}
}
console.log(`----------------------------------------`);


var str1 = "BA-"
var str2 = "BY-LON"
console.log(str1.concat(str1, str1, str1, str2));

let babylon = "";
for (i = 0; i < 7; i++) {
    if (i !== 6) {
        if (i !== 5) {
            babylon += "BA-"
        } else {
            babylon += "BY-"
        }
    }
    babylon += "LON"

}
console.log(babylon);

var str1 = "BA-";
var str2 = "BY-";
let str3 = "LON";
let result = "";
for (i = 0; i <= 5; i++) {
    if (i < 5) {
        result = result + str1;

    }
}
console.log(result);


let num1 = 1;
num2 = 900;

for (let i = 0; i <= 2; i++) {
    num1 = num1 + 1;
    console.log(num1);
    for (let j = 0; j <= 2; j++) {
        num2++
        console.log(num2);
    }
}

console.log(`===================================================`);


var str = "*****";
var x = str.length;
console.log(x);
for (i = 0; i < x; i++) {
    console.log(str.substr(i));
}
var result_star = "";

for (let i = 4; i >= 0; i--) {

    for (let j = 0; j <= i; j++) {
        result_star = result_star + "*";

    }
    console.log(result_star);
    result_star = "";
}


//12345678910

console.log(`======================================`);

var str = '';
for (let i = 1; i <= 10; i++) {
    str = str + i;
}
console.log(str);


let res_star = '';
for (i = 0; i <= 4; i++) {
    res_star = res_star + '*';
    console.log(res_star);
}


for (let i = 1; i <= 20; i++) {
    console.log(i);
}
console.log(`------------------------------------------------------`)

for (let i = 1; i <= 5; i++) {

    if (i === 1) {
        console.log(`There is  ${i} bottle of beer on the wall`);
    } else {
        console.log(`There are  ${i} bottle of beer on the wall`);
    }
}

console.log(`------------------------------------------------------`)

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);

    } else {
        console.log(`${i} is odd`)
    };
}

console.log(`------------------------------------------------------`)
// 4. Multiplication Tables
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. “2 * 9 = 18").
// **Bonus**: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

for (let i = 0; i <= 10; i++) {
    num = i * 9;
    console.log(num);
}

console.log(`------------------------------------------------------`)
// 5. Grades
// Write a program to calculate the average marks of the following students Then, this average is used to determine the corresponding grade for the class. e.g store the number.. let marks = [80, 77, 88, 94, 68];
// John    90
// Tom    60
// Jane    77
// Maria    81
// Carl    65

// The marks are graded as follows :
// Range    Grade
// <60    F
// <70    D
// <80    C
// <90    B
// <100    A

let markJohn = 90;
let markTom = 60;
let markJane = 77;
let markMaria = 81;
let markCarl = 65;

var avgMark = (markJohn + markTom + markJane + markMaria + markCarl) / 5;
console.log(avgMark);
if (avgMark < 60) {
    console.log(`This class grade is F`);
}
// else if(avgMark < 70 && avgMark > 60) {console.log(`This class grade is D`);}
// else if(avgMark < 80 && avgMark > 70) {console.log(`This class grade is C`);}
// else if(avgMark < 90 && avgMark > 80) {console.log(`This class grade is B`);}
// else(avgMark < 100 && avgMark > 90) {console.log(`This class grade is A`);}


console.log(`------------------------------------------------------`)

// 6. Fizz Buzz
// Write a program which iterates the integers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log(`FizzBuzz ${i}`);
    } else if (i % 3 == 0) {
        console.log(`Fizz ${i}`);
    } else if (i % 5 == 0) {
        console.log(`Buzz ${i}`);
    } else {
        console.log(i);
    }
}




console.log(`------------------------------------------------------`)
// 7. Sum of Multiples
// Write a program to add the multiples of 3 and 5 under 1000.


for (let i = 0; i <= 1000; i++) {
    if ((i % 3 === 0) || (i % 5 === 0)) {
        console.log(`${i}`)
    };

}
console.log(`------------------------------------------------------`)



let names = ["John", "Victor", "Alex"];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, ${names[i]} is at index ${i} of my friends array`);
}

console.log(`------------------------------------------------------`)

var tip = "";
var jip = "";
var gip = "";
var lip = "";
var dip = "";
for (let i = 0; i < 5; i++) {
    for (i = 1; i <= 10; i++) {
        tip = tip + i + "00" + " ";
    }
    console.log(tip);

    for (i = 0; i < 10; i++) {
        {
            gip = gip + Math.pow(2, i) + " ";
        }

    }
    console.log(gip);
    for (let i = 0; i < 6; i++) {
        jip = jip + (2 * i) + " ";

    }
    console.log(jip);
    for (i = 1; i < 6; i++) {
        lip = lip + (3 * i) + " ";
    }
    console.log(lip)
}
for (i = 9; i >= 0; i--) {
    dip = dip + i + " ";

}
console.log(dip);

console.log(`------------------------------------------------------`)

function pal(strm) {
    str = str.toLowerCase().replace(/[^a-z]+/g,"");
    return str === str.split("").reverse().join("")
}
console.log(pal("madam"));


//Solution 2

var originalstr ="madam";
var reverseWord=originalstr.split('').reverse().join();
console.log(reverseWord);

if(originalstr == reverseWord)
{console.log(`true`)}