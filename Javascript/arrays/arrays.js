const fruits = ["mango", "pineapple", "banana"];
console.log(fruits[2]); // banana
console.log(fruits); //["mango", "pineapple", "banana"]
fruits[1] = "apple"
console.log(fruits); //["mango", "apple", "banana"]
fruits[1] = fruits[1].toUpperCase();
console.log(fruits); //["mango", "APPLE", "banana"]

let  vegetables = ["tomato", "pak choi", "aubergine"];

let names = ["ha", "ha-ha", "ha-ha-ha", "ha-ha-ha-ha"]

for(i=0;i<names.length; i++) {
    console.log(names[i]);
}

let bands = [["Queen", "Iron and Wine", "Tokyo Hotel", "Green Day"], "Black Sabbath", "Guns n Roses"]
console.log(bands[0][1])
console.log(bands);

for(i=0;i<bands.length; i++) {
    console.log(bands[i]);
    for(let j=0;j<bands[i].length;j++) {
        console.log(bands[i][j]);
    }
}

let characters = ["Rick", "Morty", "Karl", "Noobnoob"]
console.log(characters.indexOf("Noobnoob", 3));// 3
console.log(characters.indexOf("Noobnoob", 4)); // -1
console.log(characters.concat(fruits)); //[ 'Rick', 'Morty', 'Karl', 'Noobnoob', 'mango', 'APPLE', 'banana' ]
console.log(characters.slice(2)); // [ 'Karl', 'Noobnoob' ]
console.log(characters);//[ 'Rick', 'Morty', 'Karl', 'Noobnoob' ]
console.log(characters.splice(1,0,"Alex")); //[]
console.log(characters);//[ 'Rick', 'Alex', 'Morty', 'Karl', 'Noobnoob' ]
console.log(characters.join()); //Rick,Alex,Morty,Karl,Noobnoob
console.log(characters.join("*"));//Rick*Alex*Morty*Karl*Noobnoob
console.log(characters.pop());//Noobnoob
console.log(characters);
console.log(characters);//[ 'Rick', 'Alex', 'Morty', 'Karl' ]
console.log(characters.push("Miller")); //5
console.log(characters);// [ 'Rick', 'Alex', 'Morty', 'Karl', 'Miller' ]
console.log(characters.unshift("Butcher"));// 6
console.log(characters);// [ 'Butcher', Rick', 'Alex', 'Morty', 'Karl', 'Miller' ]
console.log(characters.shift("Butcher"));// Butcher
console.log(characters);// [ 'Rick', 'Alex', 'Morty', 'Karl', 'Miller' ]

characters[10] ="Something"
console.log(characters);// [ 'Rick', 'Alex', 'Morty', 'Karl', 'Miller', <5 empty items>, 'Something' ]




