var colors = [
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[randomNum()];
var colorDisplay = document.getElementById("colorDisplay");
var correct = document.getElementById("Correct")
var newC = document.getElementById("newColors");




function randomColor(){
    var red = Math.floor(Math.random() * Math.floor(255));
    var green = Math.floor(Math.random() * Math.floor(255));
    var blue = Math.floor(Math.random() * Math.floor(255));
    var result =`rgb(${red}, ${green}, ${blue})`
    return result;
}
function randomNum (){
    var res = Math.floor(Math.random() * Math.floor(6));
    return res
}
colorDisplay.innerHTML = pickedColor;
function newcoll(){
    for(var i = 0; i<squares.length;i++){
        //add initial colors
        squares[i].style.backgroundColor = colors[i];
        //add click listeners to squares;
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                correct.innerHTML = "Correct!"
            }
            else {
                this.style.backgroundColor = "#232323"
                this.style.transition = "1.2s"
                correct.innerHTML = "Try Again!"
            }
        })
    }};
    newcoll();
    newC.addEventListener("click", function(){
         newcoll();
    });