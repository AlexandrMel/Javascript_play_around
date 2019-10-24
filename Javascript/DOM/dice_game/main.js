let newGame = document.querySelector(".btn-new");
let rollDIce = document.querySelector(".btn-roll");
let hold = document.querySelector(".btn-hold");
let player_0_panel = document.querySelector(".player-0-panel");
let player_1_panel = document.querySelector(".player-1-panel");
let player1_g_score = document.querySelector(".pl-gsc-1");
let player2_g_score = document.querySelector(".pl-gsc-2");
let player1_score = document.querySelector(".pl-sc-1");
let player2_score = document.querySelector(".pl-sc-2");
let dices = document.querySelector(".dices");
let view = document.querySelector("#view");
let view2 = document.querySelector("#view2");
let dice = document.querySelector("#dice");
let dice2 = document.querySelector("#dice2");
let player1Name = document.querySelector(".pl-n-1");
let player2Name = document.querySelector(".pl-n-2");
let switchKey = document.querySelector("#switchContainer");
let switchTab = document.querySelector("#switch");
let winLimitInput = document.querySelector(".inputWin");
let randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};
var buttonKey = true;
document.querySelector(".gameRules").onclick = function() {
  let gameRules = document.querySelector(".gameRules");
  if (gameRules.innerHTML == "Check out the Game rules") {
    document.querySelector(".flip-card-inner").classList.toggle("flip");
    gameRules.innerHTML = "Go back to the Game";
  } else {
    document.querySelector(".flip-card-inner").classList.toggle("flip");
    gameRules.innerHTML = "Check out the Game rules";
  }
};
function forDiceRolling(event) {
  event.preventDefault();
  if (event.code == "Space") {
    diceRolling();
    event.stopPropagation();
  }
}
function forHoldPress(event) {
  if (event.code == "KeyS") {
    holdPress();
    event.stopPropagation();
  }
}
function forReload(event) {
  if (event.code == "KeyN") {
    Reload();
  }
}
switcheru();
switchKey.addEventListener("click", function(event) {
  switcheru();
});

function switcheru() {
  winLimitInput.value = "";
  if (buttonKey == true) {
    let body = document.querySelector("body");
    switchTab.style.transform = "translateX(0px)";
    document.querySelector("#mouse").classList.toggle("bold");
    document.querySelector("#keyboard").classList.toggle("bold");
    document.querySelector("body").onkeydown = null;
    document.querySelector("body").onkeyup = null;
    document.querySelector("html").onkeyup = null;
    rollDIce.onclick = diceRolling;
    hold.onclick = holdPress;
    newGame.onclick = Reload;
    buttonKey = false;
    return buttonKey;
  } else if (buttonKey == false) {
    switchTab.style.transform = "translateX(37.5px)";
    document.querySelector("#mouse").classList.toggle("bold");
    document.querySelector("#keyboard").classList.toggle("bold");
    rollDIce.onclick = null;
    hold.onclick = null;
    newGame.onclick = null;
    document.querySelector("body").onkeydown = forReload;
    document.querySelector("body").onkeyup = forHoldPress;
    document.querySelector("html").onkeyup = forDiceRolling;
    buttonKey = true;
    return buttonKey;
  }
}
function verifyScore() {
  let winLimit = winLimitInput.value | 20;
  if (
    Number(player1_g_score.innerHTML) > Number(player2_g_score.innerHTML) &&
    Number(player1_g_score.innerHTML) > winLimit
  ) {
    player1Name.innerHTML = "WINNER";
    player1Name.style.fontWeight = "500";
    player1_g_score.style.fontWeight = "500";
    view.style.display = "none";
    view2.style.display = "none";
    player_0_panel.classList.add("winnerClass");
    player1_g_score.classList.add("pulse");
  }
  if (
    Number(player2_g_score.innerHTML) > Number(player1_g_score.innerHTML) &&
    Number(player2_g_score.innerHTML) > winLimit
  ) {
    player2Name.innerHTML = "WINNER";
    player2Name.style.fontWeight = "500";
    player2_g_score.style.fontWeight = "500";
    view.style.display = "none";
    view2.style.display = "none";
    player_1_panel.classList.add("winnerClass");
    player2_g_score.classList.add("pulse");
  }
  resetScore();
}

function animate(num, x) {
  if (num == 1) {
    x.style.transform = "rotateY(360deg)";
    x.style["-webkit-transform"] = "rotateY(360deg)";
  }
  if (num == 2) {
    x.style.transform = "rotateY(-90deg)";
    x.style["-webkit-transform"] = "rotateY(-90deg)";
  }
  if (num == 3) {
    x.style.transform = "rotateY(180deg)";
    x.style["-webkit-transform"] = "rotateY(180deg)";
  }
  if (num == 4) {
    x.style.transform = "rotateY(90deg)";
    x.style["-webkit-transform"] = "rotateY(90deg)";
  }
  if (num == 5) {
    x.style.transform = "rotateX(-90deg)";
    x.style["-webkit-transform"] = "rotateX(-90deg)";
  }
  if (num == 6) {
    x.style.transform = "rotateX(90deg)";
    x.style["-webkit-transform"] = "rotateX(90deg)";
  }
}

function resetScore() {
  player_0_panel.classList.toggle("active");
  player_1_panel.classList.toggle("active");
  player1_score.innerHTML = 0;
  player2_score.innerHTML = 0;
}

function diceRolling() {
    rollDIce.blur();
  if (player1Name.innerHTML == "WINNER" || player2Name.innerHTML == "WINNER") {
  } else {
    dice.style.display = "block";
    dice2.style.display = "block";
    let nr = randomNumber();
    let nr2 = randomNumber();
    if (player_0_panel.classList.contains("active")) {
      animate(nr, dice);
      animate(nr2, dice2);
      if (nr !== 1 && nr2 !== 1) {
        setTimeout(function() {
          player1_score.innerHTML = Number(player1_score.innerHTML) + nr + nr2;
        }, 500);
      } else {
        resetScore();
      }
    } else {
      animate(nr, dice);
      animate(nr2, dice2);
      if (nr !== 1 && nr2 !== 1) {
        setTimeout(function() {
          player2_score.innerHTML = Number(player2_score.innerHTML) + nr + nr2;
        }, 500);
      } else {
        resetScore();
      }
    }
  }
}

function holdPress() {
    hold.blur();
  if (player_0_panel.classList.contains("active")) {
    player1_g_score.innerHTML =
      Number(player1_g_score.innerHTML) + Number(player1_score.innerHTML);
    resetScore();
  } else {
    player2_g_score.innerHTML =
      Number(player2_g_score.innerHTML) + Number(player2_score.innerHTML);
    resetScore();
  }
  verifyScore();
  resetScore();
}

function Reload() {
    newGame.blur()
  winLimitInput.value = "";
  location.reload();
}
