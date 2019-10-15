let newGame = document.querySelector(".btn-new");
let rollDIce = document.querySelector(".btn-roll")
let hold = document.querySelector(".btn-hold")
let player_0_panel = document.querySelector(".player-0-panel");
let player_1_panel = document.querySelector(".player-1-panel");
let player1_g_score = document.querySelector(".pl-gsc-1")
let player2_g_score = document.querySelector(".pl-gsc-2")
let player1_score = document.querySelector(".pl-sc-1")
let player2_score = document.querySelector(".pl-sc-2")
let dices = document.querySelector(".dices");
let view = document.querySelector("#view");
let dice = document.querySelector("#dice")
let player1Name = document.querySelector(".pl-n-1")
let player2Name = document.querySelector(".pl-n-2")
let body = document.querySelector("body");


let randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}
rollDIce.addEventListener("keyup", function (event) {
    // alert(event.code)
    event.preventDefault();

    if (event.code == "Space") {
        diceRolling();
    }
});
rollDIce.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.code == "Enter") {
        hold.onclick();
    }
});
rollDIce.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.code == "KeyN") {
        newGame.onclick();
    }
});
rollDIce.addEventListener("click", diceRolling);

function verifyScore() {
    if (Number(player1_g_score.innerHTML) > Number(player2_g_score.innerHTML) && Number(player1_g_score.innerHTML) > 20) {
        player1Name.innerHTML = "WINNER";
    }
    if (Number(player2_g_score.innerHTML) > Number(player1_g_score.innerHTML) && Number(player2_g_score.innerHTML) > 20) {
        player2Name.innerHTML = "WINNER";
    }
    player1_score.innerHTML = 0;
    player2_score.innerHTML = 0;
}
function animate(num) {
    if (num == 1) {
        dice.style.transform = "rotateY(360deg)"
    }
    if (num == 2) {
        dice.style.transform = "rotateY(-90deg)"
    }
    if (num == 3) {
        dice.style.transform = "rotateY(180deg)"
    }
    if (num == 4) {
        dice.style.transform = "rotateY(90deg)"
    }
    if (num == 5) {
        dice.style.transform = "rotateX(-90deg)"
    }
    if (num == 6) {
        dice.style.transform = "rotateX(90deg)"
    }
}

function diceRolling() {
    if (player1Name.innerHTML == "WINNER" || player2Name.innerHTML == "WINNER") {

    } else {
        view.style.display = "block"
        if (player_0_panel.classList.contains("active")) {
            let nr = randomNumber();
            dices.setAttribute("src", `dice-${nr}.png`);
            animate(nr)
            if (nr !== 1) {
                player1_score.innerHTML = Number(player1_score.innerHTML) + nr;
            } else {
                player_0_panel.classList.toggle("active")
                player_1_panel.classList.toggle("active")
                player1_score.innerHTML = 0;
            }
        } else {
            let nr = randomNumber();
            dices.setAttribute("src", `dice-${nr}.png`);
            animate(nr)
            if (nr !== 1) {
                player2_score.innerHTML = Number(player2_score.innerHTML) + nr;
            } else {
                player_0_panel.classList.toggle("active")
                player_1_panel.classList.toggle("active")
                player2_score.innerHTML = 0;
            }
        }
    }
}
hold.onclick = function () {
    if (player_0_panel.classList.contains("active")) {
        player1_g_score.innerHTML = Number(player1_g_score.innerHTML) + Number(player1_score.innerHTML);
        player_0_panel.classList.toggle("active")
        player_1_panel.classList.toggle("active")
        player1_score.innerHTML = 0;
    } else {
        player2_g_score.innerHTML = Number(player2_g_score.innerHTML) + Number(player2_score.innerHTML);
        player_0_panel.classList.toggle("active")
        player_1_panel.classList.toggle("active")
        player2_score.innerHTML = 0;
    }
    verifyScore();
}
newGame.onclick = function () {
    location.reload(true)
}

