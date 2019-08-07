//Lets  make a function that concats "bla" 5 times to a string;


// function concat(str){
// for(i=0; i<5; i++){
//     str += "bla" 
// }
// console.log(str);
// }

function concat(str) {
    //if we added 5 blas
    //console.log(str)
    //return;
    //else;
    //kkep on doing

    if(str.length>19){
        return;
    }
    str += "bla"
    console.log(str)
    concat(str);

}
concat(`Babylon`)


//

// function calc(n) {
// console.log(n);
// if(n===0) return;
// calc(n-1);  
// }

// calc(20);


// Write a recursive function that prints all numbers from 0 till 100

// var str = 0;
// function calc(n) {
//     if(str === n) {return}
//     else{
//     str += 1;
//     console.log(str)
//     calc(n);}
// }
// calc(100);

function printAll(n, str1) {
    console.log(str1 - n);
    if(n == 0) {
        return;
    }
    printAll(n-1, str1);
}
printAll(100, 100);
//Write a recursive function that prints all odd numbers 100 till 0

function calcFN(n) {
if(n%2 !== 0) {console.log(n);}
else if(n===0) {return}
calcFN(n-1);  
}

calcFN(100);
// Write a recursive function that takes a number and returns the sum of all numbers from 1 up to the number passed in.
console.log(`++++++++++++++++`);

function printAll2(n, str1) {
    str1 += n;
    if(n == 1){console.log(str1)};
     if(n == 0) {
        return;
    }
    printAll2(n-1, str1);
}
printAll2(3, 0);
// function revStr(str){
//     if (str === '') return '';
//     return revStr(str.substr(1)) + str[0];
//   }revStr('cat');
  // tac

console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`)
function printALA(n){
    if(n == 1) return;
    else return n + printALA(n-1);
};
console.log(printALA(5));
console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`)
// Write a recursive function that calculates the factorial of a number. Factorial of 5 is 5*4*3*2*1 = 120
console.log(`++++++++++++++++`);
function printAll3(n, str2) {
    str2 = str2 * n;
    if(n == 1){console.log(str2)};
    if(n == 0) {
        return;
    }
    printAll3(n-1, str2);
}
printAll3(5, 1);
console.log(`++++++++++++++++`);

// Write a recursive function that raises a number x to the power of y
function printAll4(x, y, str3) {
    str3 = str3 * x;
    if(y == 1){console.log(str3)};
    if(y == 0) {
        return;
    }
    printAll4(x, y-1, str3);
}
printAll4(3, 3, 1);
console.log(`++++++++++++++++`);

// Write a recursive function that reverses a string

console.log(`++++++++++++++++`);
function printAll5(str5,res, v) {
     n = str5.length-v;
     res += str5.charAt(n);
    if(n == 0){console.log(res)};
    if(n == -1) {
        return;
    };
    printAll5(str5, res, v+1);
};
printAll5("1234567", " ", 1);
console.log(`++++++++++++++++`);