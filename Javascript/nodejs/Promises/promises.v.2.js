// getMyDetails(url, function(data){
//     getMyAvatar(url, (data)=> {
//         getMyEvents(url, (data) => {
//             showAllMyStuff();
//         })
//     })
// })

// const rain = true;

// const promise = new Promise((resolve, reject) => {
//     if(rain) resolve(`Ok I have been resolved`)
//     else reject (`Ok i have been rejected!`)
// });
// console.log(promise);

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////


// const giveMeARandom = new Promise((resolve, reject) => {
//     const randomNumber = Math.random();
//     console.log(randomNumber)
//     if(randomNumber > 0.5) resolve(`We are doing great!!`);
//     else reject(`We are not doing so well!`)
// });

// giveMeARandom
// .then(data => {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error)
// })


////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////


//Chaining promises

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve(`Promise 1 is  resolved`);
//     },4000)

// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve(`Promise 2 is  resolved`);
//     },4000)

// });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve(`Promise 3 is  resolved`);
//     },4000)

// });

// promise1.then(data => {
//     console.log(data);
//     promise2.then(data => {
//         console.log(data);
//         promise3.then(data => {
//             console.log(data)
//         })
//     })
// })

// promise1.then(data => {
//     console.log(data);
//    return promise2
// })
// .then(data => {
// console.log(data)
// return promise3
// })
// .then(data => {
//     console.log(data)
// });

// Promise.all([promise1, promise2, promise3]).then(data => {
//     console.log(data);

// }).catch(err => {
//     console.log(err)
// })


////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// printMessage = () => {
//     return new Promise(resolve => {
//         resolve(`I am resolved!`)
//     })
// }

// printMessage().then(data => {
// console.log(data)
// })

// callMyFunction = async () => {
// const msg = await printMessage();
// }

// callMyFunction();


const fs = require("fs");
const {promisify} = require("util")

fs.readFile("./data.txt", "utf8", (err, data)=> {
    if(err) throw err;
    console.log(data);
});

const myReadFile = promisify(fs.readFile);

myReadFile("data.txt", "utf8").then(data => {console.log(data)});