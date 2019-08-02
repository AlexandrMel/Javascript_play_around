var h1d = document.querySelector("#display1");
var h2d = document.querySelector("#display2");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var reset = document.querySelector("#reset");
var numINP = document.querySelector("input");
var win_displ = document.querySelector("p span");
var pscore = 0;
var pscore1 = 0;
var gameover = false;
var max_score = 5;

button1.addEventListener("click", function () {
    if(!gameover) {
        pscore++;
        console.log(pscore);
    }
    if(pscore === max_score) {
        console.log("Game Over !!!");
        display1.classList.add("winner");
        gameover = true;
    }
    h1d.textContent = pscore;
})
button2.addEventListener("click", function () {
    if(!gameover) {
        pscore1++;
        console.log(pscore1);
    }
    if(pscore1 === max_score) {
        display2.classList.add("winner");
        console.log("Game Over !!!");
        gameover = true;
    }
    h2d.textContent = pscore1;
})
reset.addEventListener("click", function (){
    console.log("RESET CLICKED")
    pscore = 0;
    pscore1 = 0;
    h1d.textContent = 0;
    h2d.textContent = 0;
    h1d.classList.remove("winner");
    h2d.classList.remove("winner");
    gameover = false;
});

numINP.addEventListener("change", function() {
    win_displ.textContent = numINP.value
    max_score = Number(numINP.value);
    console.log(max_score);
    });