// #Array Exercises
// ##These exercises are aimed at practicing arrays and array methods. Print each task the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
var Moldova = "Chisinau";
euroCities[1] = Moldova;
console.log(euroCities);//[ 'Paris', 'Chisinau', 'Valletta', 'Prague', 'Rome' ]

// 2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin"
console.log(euroCities) //[ 'Berlin', 'Chisinau', 'Valletta', 'Prague', 'Rome' ]


// 3. Print the length of the array "euroCities".
console.log(euroCities.length); // 5

// 4. Remove the last item of the array "euroCities".
euroCities.pop();
console.log(euroCities);// [ 'Berlin', 'Chisinau', 'Valletta', 'Prague', 'Rome' ]


// 5. Use an array method to add "Budapest" to the euroCities array.

euroCities.splice(1, 0, "Budapest");
console.log(euroCities); //[ 'Berlin', 'Budapest', 'Chisinau', 'Valletta', 'Prague' ]

// 6. Remove the second and third items from the euroCities array.
euroCities.splice(2, 1,);
console.log(euroCities); //[ 'Berlin', 'Budapest', 'Valletta', 'Prague' ]

// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
let asianCities = ["Beijing", "Beijing2", "Beijing3"];
let cloneAsianCities = asianCities.slice(0, asianCities.length);
console.log("----------")
console.log(asianCities);//[ 'Beijing', 'Beijing2', 'Beijing3' ]
console.log(cloneAsianCities);//[ 'Beijing', 'Beijing2', 'Beijing3' ]
asianCities[3] = "Beijing4";
asianCities[4] = "Beijing5";
// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable.
let someAsianCities = asianCities.slice(1, 4);
console.log(someAsianCities); // [ 'Beijing', 'Beijing2', 'Beijing3' ]

// 9. Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).

let worldCities = euroCities.concat(asianCities);
console.log(worldCities); //[ 'Berlin','Budapest','Valletta','Prague','Beijing','Beijing2','Beijing3''Beijing4','Beijing5' ]

// 10. Reverse the order of worldCities.
worldCities = worldCities.reverse();
console.log(worldCities); //[ 'Beijing5','Beijing4','Beijing3','Beijing2','Beijing','Prague','Valletta','Budapest','Berlin' ]


// 11. Replace the 3rd item in the array of worldCities with "Toronto".
worldCities.splice(2, 1, "Toronto");
console.log(worldCities);
// 12. Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
worldCities.splice(1, 0, "Washington");
console.log(worldCities);

// 13. Write a program to join all elements of the result (worldCities) into a string.
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Output:
// "Berlin,London,Bangkok,Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh"

function joinArray(n, array) {
array = array.join(n);
console.log(array);
}
joinArray(",", worldCities);// Beijing5,Washington,Beijing4,Toronto,Beijing2,Beijing,Prague,Valletta,Budapest,Berlin
joinArray("+", worldCities); //Beijing5+Washington+Beijing4+Toronto+Beijing2+Beijing+Prague+Valletta+Budapest+Berlin

// 14. Empty the array euroCities while keeping the original intact.


let newString = euroCities.slice(1,0);
console.log(newString);
console.log(euroCities);

// #Bonus

// 15. Write a program to reverse the string: "Hello World".

function reverseString(str1) {
    str1 = str1.split("").reverse().join("");
    console.log(str1);
}
reverseString("Miller"); // relliM
reverseString("Guliver");//reviluG


// ##Extra Practice

// **Print the results to the console.**

// 1. Make an array of your siblings' names or your favorite movie characters' names.
// 2. Make an array of your parents' names.
// 3. Combine these two arrays.
// 4. Add your pets' names.
// 5. Reverse the order of the array.
// 6. Access one of your parents' names.
// 7. Update the name of one of your parents.


let siblings = ["Vadim", "Olga"];
let parents = ["Valentina", "Vasili"];
let together = parents.concat(siblings);
console.log(together); //[ 'Valentina', 'Vasili', 'Vadim', 'Olga' ]
together.push("Arman");
console.log(together); //[ 'Valentina', 'Vasili', 'Vadim', 'Olga', 'Arman' ]
together.reverse();
console.log(together); //[ 'Arman', 'Olga', 'Vadim', 'Vasili', 'Valentina' ]
let parent1 = together[4];
let parent2 = together[3];
console.log(parent1); //Valetina
console.log(parent2); // Vasili
together[3] ="Vasilica";
console.log(together); //[ 'Arman', 'Olga', 'Vadim', 'Vasilica', 'Valentina' ]





function changeEnough(change, amountDue) {
	var sum = change[0] * 0.25 + change[1] * 0.10 + change[2] * 0.05 + change[3] * 0.01;
	if(sum >= amountDue){
		return true;
	}
	else{
		return false;
	}
}
console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([10, 0, 0, 50], 13.85));
console.log(changeEnough([2, 100, 0, 0], 14.11));


function sumTwoSmallestNumbers(numbers) {  
    //Code here
    numbers = numbers.sort(function(a, b){return a-b});
   sum = numbers[0]+numbers[1];
  return sum;
  }
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))// 6 ,
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // 10 
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))//  24 
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])) // 16 

function sumTwoSmallestNumbers2(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
  
let arri = ["one", "two", "three"];
var [a,b,c] = ["one", "two", "three"];
console.log(a);
console.log(b);
console.log(c);
var [d,e,f] = euroCities;
console.log(d)
console.log(e)
console.log(f)