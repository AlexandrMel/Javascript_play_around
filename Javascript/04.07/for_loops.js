// for( let i = 0; i<100; i++) {
//     // the code
//     console.log(`This is loop number ${i}`);
// }

// let name = "Vasilis";
// for(let i = 0; i<3; i++) {
//     console.log(`This is loop number ${i}`)
//     name = name + name;
//     console.log(name);
//     console.log(`This is the a=end of loop number ${i}`)
// }

// let amount = 2;

// for(let i=0; i<5; i++) {
//     amount= amount * amount;
//     console.log(amount);
//     console.log(` This isthe end of loop number ${1}`);
// }


// for (let  i=1; i<100; i++) {
//     if( i%17 == 0) {
//         console.log(`The first number being devided perfectly by 17 is: ${i}`);

//     } else {
//         console.log(`${i} is not cool`);
//     }
// }



for(let i = 0; i<=3; i++) {
    console.log(`I am the parent loop.`);
    for(let j=0; j<=2; j++) {
        console.log(`I am the nested loop of ${i} and my number is${j}`)
    }
}


// var ageJohn = 30;
// var agePeter = 30;
// var heightJohn = 188;
// var heightPeter = 170;
// var scoreJohn = heightJohn + 5*ageJohn;
// //console.log(scoreJohn);
// var scorePeter = heightPeter + 5*agePeter;
// //console.log(scorePeter);
// if(scoreJohn > scorePeter) {
//     console.log(`The winner is John!!`);
// }
// if(scoreJohn < scorePeter) {
//     console.log(`The winner is Peter!!`);
// }
// if(scoreJohn === scorePeter) {
//     console.log(`Its a Draw!!`);
// };


function winner(ageJohn, agePeter, ageVictor, heightJohn, heightPeter, heightVictor) {
    var scoreJohn = heightJohn + 5*ageJohn;
//console.log(scoreJohn);
var scorePeter = heightPeter + 5*agePeter;
//console.log(scorePeter);
var scoreVictor = heightVictor + 5*ageVictor;
if(scoreJohn > scorePeter && scoreJohn > scoreVictor) {
    console.log(`The winner is John!!`);
}
else if(scoreJohn < scorePeter && scoreVictor < scorePeter) {
    console.log(`The winner is Peter!!`);
}
else if(scoreJohn < scoreVictor && scoreVictor > scorePeter) {
    console.log(`The winner is Victor!!`);
}
else if(scoreJohn === scorePeter && scorePeter === scoreVictor) {
    console.log(`Its a Draw!!`);
}
}

winner(20, 20, 20, 180, 180, 180);