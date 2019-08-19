var myCar = {
    //key: value;
    make: "Ford",
    model: "Mustang",
    year: "1999"
}
var myCar = {};
myCar.make = "Ford"
myCar.model = "Mustang"
myCar.year = "1888"

console.log(myCar);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);

let persInfo = {
    firstName: "Alex",
    lastName: "Miller",
    age: 31,
    city: "Berlin"
}

console.log(persInfo.firstName); // "Alex"


var family = {
    children: [{
        age: 3,
        name: "paul"
    }, {
        age: 4,
        name: "susie"
    }],
    father: "peter",
    mother: "Lila"
};

console.log(family);
console.log(family.children[0].name);