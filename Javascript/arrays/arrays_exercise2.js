

function printReverse(num) {
    for(i = (num.length-1); i>=0; i--) {
        console.log(num[i]);
    }
}
printReverse([1,2,3,4]);
printReverse(["a","b","c","d"]);

console.log("==========================")
function isUniform(numi) {
    var uniform = numi[0];
    for(i = 1; i<numi.length; i++) {
        if(uniform !== numi[i])
        { 
            return false;
        }
    }  
    return true; 
} 
console.log(isUniform([1,1,1,1,1,1,1]));
console.log("==========================")

function sumUp(arr) {
    var total = 0;

    arr.forEach(function(element) {
        total += element;
    });
    console.log(total); 
}

sumUp([3,6,9,10,11])

console.log("=====================");
function maxNum(arg) {
    var max = arg[0]
    for(i = 1;i<arg.length; i++) {
        if(arg[i] > max) {
            max = arg[i];
        }

    }
    console.log(max);
}
maxNum([3,10,12,15]);

var movieDatabase = [
    {
        title: "Avangers",
        rating: 4.5,
        watched: true
    },
    {
        title: "Thor",
        rating: 4.0,
        watched: true
    },
    {
        title: "The New Spiderman",
        rating: 3.9,
        watched: false
    },
    {
        title: "Shazam",
        rating: 4.2,
        watched: false
    }
]

movieDatabase.forEach(function(movie){
    console.log(printFunc(movie));
});

function printFunc(movie) {
    var result = "You have ";
    if(movie.watched){
        result += "watched ";
    }
    else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}