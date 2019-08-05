//Passing Functions as arguments
//Age ,Full Age, heart rate

var name = "John";
function detailsCalculate(name, birthYear, funParam) {
    
console.log(`Hi, ${name} your age is ${funParam(birthYear)}`);
}

function calculateAge(AgeParam) {

    return 2019-AgeParam;
}
function isFullAge(ageP) {
    return ageP >= 18;
}

function maxHeartRate (ageParam) {
    var age = calculateAge(ageParam);
    if(age >= 18 && age <= 81){
        return 220-age;
    }
    else {
        return -1;
    }
}
console.log("Age...");
detailsCalculate(name, 1985, calculateAge);
detailsCalculate(name, 1985, isFullAge);
detailsCalculate(name, 1989, maxHeartRate);


//Task : Write Javascript function that accepts three arguments, a string,letter and function. Passed Function as argument will count the number of occurrences of the specified letter within the string.
//Sameple arguments, "Iamstudent at DCI", 't',countWord
//Expected output: 3

function calcLetter( string, letter, funct) {
    console.log(` The string ${string} has the letter ${letter} inside ${funct(string, letter)}`)

}

function calcFunc(str, x) {
    var string = str.toLowerCase();
   var x = x.toLowerCase()
    var result = string.split(x).length-1;
    console.log(typeof(result));
    return result;
}
function calcF (string, letter) {
    string = string.toLowerCase();
    letter = letter.toLowerCase();
    let n = 0;
    
    for(let i=0; i<string.length; i++){
        if(string.charAt(i) === letter)  n+=1;
    }
        
        return n;
    }
calcLetter("I am superman i i i", "i", calcFunc);
calcLetter("I am supermanN i i i n N", "N", calcF);




