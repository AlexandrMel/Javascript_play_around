
// var todos = ["Buy New Turtle"];

// var input = prompt("What would you like to do?");


// while(input !== "quit") {
//     if(input === "list") {
//         console.log(todos);
//     }
//     else if(input === "new") {
    
//         var newTodo = prompt("Enter new todo");
    
//         todos.push(newTodo);
//     }
//     input = prompt("What would you like to do?");
// }

// console.log("OK,YOU QUIT THE APP");

var colors = ["red","green","orange","blue"];
// for(var i = 0; i<colors.length; i++) {
//     console.log(colors[i]);
// }
colors.forEach(function(iLoveDogs){
    console.log("inside the foreach " + iLoveDogs)
})

function printColor(color) {
    console.log("***********");
    console.log(color);
    console.log("***********");
};
printColor("purple");
colors.forEach(printColor);



