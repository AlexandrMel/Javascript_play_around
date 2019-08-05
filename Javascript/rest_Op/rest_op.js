//rest arguments

// function countArgum(param1, param2, param3)
// {
//     console.log(param1+" "+ param2 + " " + param3);
// }
// countArgum("I", "am", "superman");


function countArguments(...args) {
    var param1 = args[0];
    var param2 = args[1];
    var param3 = args[2];
    console.log(param1 + " " + param2 + " " + param3);

}
countArguments("I","am","Thor!");




function persData(FName, LName, birthD, ... restData ) {
    console.log(`My Name is ${FName} ${LName} i was born on ${birthD}, i was born in ${restData[0]}, zip code ${restData[1]} which is the capital of ${restData[2]} `)
}
persData("Alexandr", "Miller","9 of november 1988", "Chisinau", "2028", "Moldova");