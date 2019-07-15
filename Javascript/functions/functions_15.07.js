//Write a function that will take as input the lengths of two sides of a triangle and it will return the length of the third side (Pythagorean).

const pythagorean =(side1, side2) => {
    let result = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
    return result;
}
console.log(pythagorean(6,8));


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


function yearBorn(x) {
    let resu = 2019 - x;
    return resu;


}
console.log(yearBorn('1988'));