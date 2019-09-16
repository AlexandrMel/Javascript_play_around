var form = document.querySelector("form");
var firstName = document.querySelector("#fName");
var lastName = document.querySelector("#lName");
var job = document.querySelector("#job");
var comments = document.querySelector("#comments");
var submit = document.querySelector("button");
var body = document.querySelector("body")
var content = document.querySelector("#content")


submit.onclick = () => {
content.innerHTML = `Hi my name is <br>${firstName.value} ${lastName.value}<br>currently i work as <br>${job.value}<br>and this is what i can say about my job<br> ${comments.value}`;
content.style.color = "black"
}