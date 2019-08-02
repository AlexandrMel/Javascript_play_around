var buttonTag = document.querySelector("button");
console.log(buttonTag);
// var isPurple = false;
buttonTag.addEventListener("click", function () {
    document.body.classList.toggle("purple");
});
//     if (isPurple) {
//         document.body.style.background = "white";
//         isPurple = false;
//     } else {
//         document.body.style.background = "purple";
//         isPurple = true;
//     }

// });
// var bodyB = document.getElementsByTagName("body")
// bodyB.style.background = "purple";