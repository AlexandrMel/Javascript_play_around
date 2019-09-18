const giveMeAJoke = require('give-me-a-joke')
module.exports.printMeAJoke = (type) => {
    //console.log(`I will print a ${type}`)
    if(type == "dad"){
        giveMeAJoke.getRandomDadJoke(function(joke){
            console.log(joke)
    
    });}
    else if(type === "chuck"){
//get me a programing joke
giveMeAJoke.getRandomCNJoke(function(joke){
    console.log(joke)
    });}
    else if(type === "random"){
//get me a programming joke
joker.getRandomJoke()
    }
}