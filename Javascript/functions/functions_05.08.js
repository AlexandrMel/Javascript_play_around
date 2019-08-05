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

