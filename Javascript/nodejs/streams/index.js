let fs = require("fs");


let myStream = fs.createReadStream("data.txt", "utf8")
console.log(myStream)
let chunkNumber = 1;
let word = "double-decker";
let wordCounter = 0;

myStream.on("data", chunk => {
let len = chunk.length;
console.log(`Chunk number: ${chunkNumber}  is ${len}`);
chunkNumber++;

let arr = chunk.split(" ");
arr.forEach(el => {
if(el === word) wordCounter++;  
});
console.log(`I found the word ${word} - ${wordCounter} times`)
wordCounter = 0;

});

myStream.on("end", () => {
    console.log(`====================`);
})