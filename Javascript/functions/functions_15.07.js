//Write a function that will take as input the lengths of two sides of a triangle and it will return the length of the third side (Pythagorean).

const pythagorean = (side1, side2) => {
    let result = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
    return result;
}
console.log(pythagorean(6, 8));


//Write a function that will capitalize each word we give it.

const capitalizeWord = (word) => {
    let cw = word.toUpperCase();
    return cw;
}
console.log(capitalizeWord('mad'));


//Build a pyramid
// function addSpace(i,spaceNum,res)
// {

//     for(j=0; j<spaceNum-i; j++){
//         res = " " + res;
//     }
//      return res;
// }
// function addStar(res)
// {
//     for(k=0; k<i; k++){
//         res = res + "**";
//     }
//     return res;
// }
// const pyramid = (num) => {
//     let res;
//     for(i=0; i<num; i++){
//         res = "*";

//         // we add spaces
//        res =addSpace(i,num,res);

//        // we add stars
//        res =addStar(res);
//         console.log(res);
//     }
// }
// pyramid(0);

// Calculate age

function calcAge(yearBorn)
{
 //set of the statements

 //Way : 1
 // let res;
 // res=2019-yearBorn;
 // return res;

 //Way : 2
 //return 2019-yearBorn;
 console.log(typeof(yearBorn));
 yearBorn = typeof(yearBorn)=="number" ? yearBorn : 0;
 if(yearBorn==0)
 {
    return "Sorry, we can not calculate your age with this parameter so kindly provide integer parameter!";
 }
 else
 {
   yearBorn=Number.isInteger(yearBorn) ? yearBorn : Math.round(yearBorn);
   return (2019-yearBorn);
 }
}
console.log(calcAge(1982));


//Calculate number greater then 10 or less then 10
function greaterTen(n) {
    // if (n > 10) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (n>10);
}
console.log(greaterTen(11));


// Task:
//
// write a function weather with one parameter
// "quality".
// return 'great' -> quality between 8 and 10
// return 'good' -> quality between 6 and 8
// return 'okay' -> quality between 3 and 6
// return 'not so okay' -> quality between 0 and 3



function weather(quality) {
    if( quality > 8 && quality < 10) {
        return "great";
    }
    else if( quality > 6 && quality < 8) {
        return "good";
    }
    else if( quality > 3 && quality < 6) {
        return "okay";
    }
    else if( quality > 0 && quality < 3) {
        return "not so okay";
    }

}
console.log(weather(9));

// Task:
// invent one function with two parameters
// that returns a string using the two parameters.

function happyBirthday(Name, years) {
    console.log(`Hey ${Name}, Congrats with your ${years} th birthday!!`);
}
happyBirthday("Alexandr", 31);

function conc(string1, string2) {
    let result = string1.concat(string2);
    console.log(result);

}
conc( "haha", 1)


//Task. Add up
//Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
//Examples of output:
//addUp(4) ➞ 10
//addUp(13) ➞ 91
//addUp(600) ➞ 180300

function addUp(n) {
    let res = 0;
    for(i=n; 0<=i; i--) {

    res = res + i;
    }
    return res;
    
}
console.log( addUp(4));
console.log( addUp(10));
console.log( addUp(100));