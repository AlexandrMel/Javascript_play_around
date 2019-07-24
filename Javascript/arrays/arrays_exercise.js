
var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");


while(input !== "quit") {
    if(input === "list") {
    listTodo()
    }
    else if(input === "new") {
    
        addTodo();
    }
    else if(input === "delete") {
       deleteTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("OK,YOU QUIT THE APP");

function listTodo() {
    todos.forEach(function(todo, i){
        console.log(i +": " + todo);
    });   
    console.log("**************")
}
function addTodo() {
    var newTodo = prompt("Enter new todo");
        console.log("Added new todo!!!")
        todos.push(newTodo);
};

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1)
    console.log("Deleted todo!!!")
};/*  */


// var colors = ["red","green","orange","blue"];
// // for(var i = 0; i<colors.length; i++) {
// //     console.log(colors[i]);
// // }
// colors.forEach(function(iLoveDogs){
//     console.log("inside the foreach " + iLoveDogs)
// })

// function printColor(color) {
//     console.log("***********");
//     console.log(color);
//     console.log("***********");
// };
// printColor("purple");
// colors.forEach(printColor);
// colors.push("new");
// console.log(colors);


// var numbers = [1,2,3,4,5,6,7,8,9,10];

// for(i = 1; i< numbers.length; i++) {
//    if(numbers[i] % 3 === 0){
//     console.log(numbers[i]);}
// }



