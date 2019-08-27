

// let console = {

////////////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////////

let band = {
    name: "The National",
    amountOfMembers: 4,
    genre: "Rock",
    city: "Cincinnati",
    latestAlbum: "I Am Easy To Find",
    instruments: ["guitar", "bass", "keys", "drums"],
    kickoutAMember: function (){
        console.log(`I Kick Out Somebody`);
    },
    printThis: function(){
        console.log(`======`)
        this.genre = "Pop"
        console.log(this)
    }};


    console.log(band.latestAlbum);
    console.log(band.instruments);
    console.log(band['latestAlbum']);
    console.log(band);
    band.kickoutAMember();
    band.printThis();

let myLife = {
    name: "Vasilis",
    nickName: "Wasabis",
    yearOfBirth: 1988,
    myAge: 30,
    anotherYearPassed: function() {
        this.myAge++;
    }
}
console.log(myLife);
myLife.anotherYearPassed()
console.log(myLife);

//JSON JSON JSON

// let response = '{"result": "true","count": 42}';
//let obj = JSON.parse(resposce);

//console.log(response);
//console.log(responce.result)
//console.log(obj);

/////////////////////////////////////
/////////////////////////////////////////
///////////////////////////////////////


// const numbers = [
//     1,
//     [2],
//     [3, [4]],
//     5
// ];

// let res = JSON.parse(JSON.stringify(numbers))
// console.log(res)

// let array = [1,2,3];
// let arrayCopy = array; does not copy but points to the value of let array([1,2,3])
// console.log(`ARRAY`, array)
// console.log(`ARRAY`, arrayCopy)

// array[0] = "I have changed, i promise"
// console.log(`ARRAY`, array)
// console.log(`ARRAY`, arrayCopy)


////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////

// let array = [1,2,3];
// let arrayCopy = [...array] // [] + array
// console.log(`ARRAY`, array)
// console.log(`ARRAY`, arrayCopy)

// array[0] = "I have changed, i promise"
// console.log(`ARRAY`, array)
// console.log(`ARRAY`, arrayCopy)

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
/////////////////////////////////////////////////

// let nestedArray = [1, [2], 3];
// let arrayCopy = [...nestedArray]; //copies pnly the first level of the array, and does not work for nested arrays
// console.log(nestedArray)
// console.log(arrayCopy)

// arrayCopy[0] = "Hello";
// arrayCopy[1][0] = "there";
// console.log(`ARRAY`, nestedArray)
// console.log(`ARRAY COPY`, arrayCopy)
// let nestedArray = [1, [2], 3];

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray));
console.log(nestedArray)
console.log(arrayCopy)

arrayCopy[0] = "Hello";
arrayCopy[1][0] = "there";
console.log(`ARRAY`, nestedArray)
console.log(`ARRAY COPY`, arrayCopy)


/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////


// let arr = ["Maurice", "Sam", "Firat", "Flo"];

// let name = arr[0];
// let [ bugatsa, okinawa, ...whatever] = arr;
// arr[0] = "asfs";

// console.log(bugatsa)
// console.log(okinawa)
// console.log(whatever)

let chair = {
    color: "Black",
    size: "Tiny",
    wheels: [0,1,2,3],
    model: "TR200md",
    changeCoolor: function(){
        console.log(`I am yeloow now`)
    }
}

let {size, color, wheels, changeCoolor} = chair;

size = "new"
console.log(size)
console.log(color)
changeCoolor()
console.log(chair)




////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////



//1. Create a variable that contains a JSON string. The properties of this JSON string should be about Joaquin Phoenix and should contain firstName, lastName, dateOFBirth, placeOfBirth, imdbRating, movies(this should be an empty array) and latestMovieTitle.

var JoaquinPhoenix = `{
    "firstName":"Joaquin",
    "lastName" :"Phoenix",
    "dateOfBirth": "2 oct 1974",
    "placeOfBirth": "Puerto Rico",
    "imbdRating": 7,
    "movies": [],
    "latestMovieTitle": "Joker"
}`
console.log(JoaquinPhoenix)
// 2. Convert that JSON to an object.

var Producer = JSON.parse(JoaquinPhoenix);
console.log(Producer)


// 3. Add a function to the object above called updateImdbRating that takes as input a number and updates the object's imdbRating.

Producer.updateImbdRating = function (num) {
    this.imbdRating = num;
}

// 4. Update his IMDB rating using the function above.

Producer.updateImbdRating(8);
console.log(Producer)

// 5. Add a new property named lastMovie. It should be an object that contains the title of the movie and the year. 
//  {title: 'Gladiator', year: 2000} .

Producer.lastMovie = {title: "Gladiator", year: 2000};
console.log(Producer)


// 6. Add a function called updateLatestMovie that takes an object as an input and edits the lastMovie and the movies array.
Producer.updateLatestMovie = function(obj) {
    // this.lastMovie = obj; // Update the last movie
    // this.movies.push(obj); // Update movies



    let t = obj.title;

    if(this.lastMovie.year < obj.year){
        this.lastMovie = obj;
    }
    if(this.movies.length === 0){
        this.movies.push(obj)
    }

    for(i=0; i<this.movies.length; i++){
        if(this.movies[i].title === t){
            return;
        }
    else if(i == this.movies.length-1){
        this.movies.push(obj)
    }}
    // for(i=0;i<obj.length;i++){
    //     if (this.movies.some(e => e.title === (Object.values((obj[i])))[0])) {
    //         continue
    //       }
    //       else
    //       {this.movies.push(obj)}; 
      
 }

console.log(`================================1234`)

// 7. Update his lastMovie and movies using that function. Please avoid duplicates in the movie array. Use the below object to call updateLatestMovie.
// {title: 'Walk the line', year: 2005}
Producer.updateLatestMovie({title: 'Walk the line', year: 2005});
console.log(Producer)

// 8. Add a property called oscarsWon with the value of 0.

Producer.oscarsWon = 0;
console.log(Producer)

// 9. Make a function called updateOscarsCount that updates oscarsWon by one.

Producer.updateOscarsCount = function(){
    this.oscarsWon++;
}

// 10. Call updateOscarsCount twice.
Producer.updateOscarsCount();
Producer.updateOscarsCount();
console.log(Producer)

// 11. Add a function called addMovies that will take an array of movies (please use the spread operator ...) and will add movies to the movies array.
console.log(`=======`)
// Producer.addMovies = function(arr){
//     for(i=0;i<arr.length;i++){
//         if (this.movies.some(e => e.title === (Object.values((arr[i])))[0])) {
//             continue
//           }
//           else
//           {this.movies.push(arr[i])}; 
      
//  }

//  console.log(`22222222222222222222222222222222222`)
//  Producer.calculateNumberOfMovies;

//  }


Producer.addMovies = function(arr){
    for(i=0; i<arr.length; i++){
        this.updateLatestMovie(arr[i]);
    }
Producer.calculateNumberOfMovies
}

// 12. Call the function three times with the below arrays. Make sure your movies array has no duplicates when you update it.
 

// console.log(Producer)
// Producer.addMovies([
//     {title: '8 mm', year: '1999'},
//     {title: 'Buffalo Soldiers', year: '2001'},
//     {title: 'Quills', year: '2000'}
// ]);



Producer.addMovies([
    {title: '8 mm', year: '1999'},
    {title: 'Buffalo Soldiers', year: '2001'},
    {title: 'Quills', year: '2000'}
]);
console.log(Producer)

// console.log(Producer)
Producer.addMovies([{ title: 'Walk e line', year: 2008 }])
console.log(Producer)


// movies1 = [
//  {title: '8 mm', year: '1999'},
//  {title: 'Buffalo Soldiers', year: '2001'},
//  {title: 'Quills', year: '2000'}
// ]

moreMovies = [
     {title: 'The Village', year: 2004},
 {title: 'Buffalo Soldiers', year: '2001'},
 {title: 'Signs', year: 2002},
 {title: 'Walk the line', year: 2005}
]
Producer.addMovies(moreMovies);
console.log(Producer)

someMoreMovies = [
     {title: 'The Master', year: 2012},
     {title: 'Joker', year: 2019},
     {title: 'Inherent Vice', year: 2014},
     {title: 'Walk the line', year: 2005},
     {title: 'You Were Never Really Here', year: 2017},
     {title: 'The Immigrant', year: 2013},
     {title: 'Alexandr', year: 2013}
    ]
Producer.addMovies(someMoreMovies)
Producer.addMovies(someMoreMovies)
console.log(Producer)
    
    
// //     // 13.     Add a function called calculateNumberOfMovies that will calculate how many movies he made and it will add a new property to the initial object called totalMovies.

    Producer.calculateNumberOfMovies = function(){
        this.totalMovies = this.movies.length;
    }

    Producer.calculateNumberOfMovies();
    console.log(Producer)


    
// //     // 14.     Everytime you call the addMovies function, which adds more movies to the object, it should update the totalMovies and it should also update the lastMovie with the latest movie based on the year of each movie.
   