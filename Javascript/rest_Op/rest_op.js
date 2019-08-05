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