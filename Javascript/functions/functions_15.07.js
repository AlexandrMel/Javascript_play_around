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

