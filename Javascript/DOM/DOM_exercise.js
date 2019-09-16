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