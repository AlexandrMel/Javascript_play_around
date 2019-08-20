//Object Methods
//A method is a function stored as property in object

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
};

console.log(person.fullName());

const personOne = {
    name: "John",
    dateOfBirth: 2000,
    age(dateOfBirth) {
        const today = new Date();
        const year = today.getFullYear();
        const age = year - this.dateOfBirth;
        return age;
    }
};
console.log(personOne.age());






