console.log(`Hello world!`);
var greetingObj = document.getElementById("greeting")
console.log(greetingObj)
greetingObj.innerHTML = "Hello World";
var saymynameObj = document.getElementById("saymyname");
saymynameObj.onclick = function(){
    // alert("I am button and clicked!...")
    var mynameObj = document.getElementById("myname");
    var thedateObj = document.getElementById("thedate");

    thedateObj.innerHTML = "Hello " + mynameObj.value + " Today is " + getDayName()[0] + ", only " + getDayName()[1] + " days left until the weekend";


    function getDayName (){
        var weekDays = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        //current date
        var date = new Date();
        //current day
        var day =date.getDay() // return day from 1 to 7
        var arr = [weekDays[day-1], 5-day];
        return arr;
    }
    //by class
    
    const exampleObj = document.getElementsByClassName('example');
    console.log(exampleObj);
    exampleObj[0].innerHTML = 'I am backend';
    // selector + #idname
   const divContainerObj = document.querySelector('#divContainer');
   divContainerObj.innerHTML = '#IDNAME access and replace';
}

//add dynamic input type text

var input = document.createElement("input");
input.type = "test";
input.className = "testClass";
document.body.appendChild(input);

var divContainerObj = document.querySelector("#divContainer");
let newHeading = document.createElement("h1");
newHeading.innerHTML= "I am heading from backend -added dynamically";
divContainerObj.insertAdjacentElement("beforebegin", newHeading);
divContainerObj.insertAdjacentHTML("afterend", "<h3> I am here h3 testing</h3>");

//local Storage vs Session Storage
//Local storage: It keeps store the user information data without expiration date this data will not be deleted when user closed the browser windows it will be available for day, week, month and year.
//Session Storage: It is same like local storage date except it will delete all data when browser windows closed by a web user.
//set the value in local storage object
//localStorage.setItem("dci","Web Developer");
console.log(localStorage.getItem("dci"));
//localStorage.removeItem("dci");
//localStorage.clear();
sessionStorage.setItem("classroom","FbW15");
console.log(sessionStorage.getItem("classroom"));