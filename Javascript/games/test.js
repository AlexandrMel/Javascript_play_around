function randomColor(){
    var red = Math.floor(Math.random() * Math.floor(255));
    var green = Math.floor(Math.random() * Math.floor(255));
    var blue = Math.floor(Math.random() * Math.floor(255));
    var result =`rgb(${red}, ${green}, ${blue})`
    return result;
}
console.log(randomColor());