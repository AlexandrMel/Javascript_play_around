const axios = require("axios");
[cityName, type, degType] = process.argv.slice(2)
const apiKEY = "8276af4c83f2a82a2e1b35e3553d4db4"
// const cityName = process.argv[2];
// const type = process.argv[3];
// const degType = process.argv[4];

const url =`http://api.openweathermap.org/data/2.5/${type}?q=${cityName}&appid=${apiKEY}&units=${degType}`

function printResults(response) {
    if(type == "forecast"){
        console.log(`
00000000000000000000000000000000000000000000000000000000
00                                                    00
00                       ${cityName}                       00
00                   5 DAYS FORECAST                  00
00000000000000000000000000000000000000000000000000000000
00         00         00         00         00        00
00${response.data.list[0].dt_txt}00  ${Number(response.data.list[1].main.temp).toFixed(2)}C 00  ${Number(response.data.list[2].main.temp).toFixed(2)}C 00  ${Number(response.data.list[3].main.temp).toFixed(2)}C 00 ${Number(response.data.list[4].main.temp).toFixed(2)}C 00
00  ${Number(response.data.list[0].main.temp).toFixed(2)}C 00  ${Number(response.data.list[1].main.temp).toFixed(2)}C 00  ${Number(response.data.list[2].main.temp).toFixed(2)}C 00  ${Number(response.data.list[3].main.temp).toFixed(2)}C 00 ${Number(response.data.list[4].main.temp).toFixed(2)}C 00
00         00         00         00         00        00
00         00         00         00         00        00
00000000000000000000000000000000000000000000000000000000`
)}
else if(type == "weather") {
    console.log(`It is now ${response.data.main.temp}C in ${cityName}\nThe current weather conditions are: ${response.data.weather[0].description}`)
    
}
}
axios.get(url).then(response => {
    printResults(response);
}).catch(err => {
    console.log(`Error!!`)
});
getWeatherData();
async function getWeatherData() {
    try{
        const res = await axios.get(url);
        printResults(res);
    }
    catch (error) {
        error
    }

}

// async function getStuff() {
//     try {
//         const response = await axios.get(url);
//         console.log(`AWAIT - It is now ${response.data.main.temp}C in ${cityName}\nThe current weather conditions are: ${response.data.weather[0].description}`)
//     }
//     catch(error) {
//         console.error(error);
//     }
// }

// getStuff();
// getStuff();

// axios.get(url)
// .then(response => {
//     //console.log(response.data.list)
// let newArr = []
// let weatherArr = [];
// let dataArr = response.data.list;
// console.log(dataArr.length)
// dataArr.forEach(el => {
// if(el.dt_txt.includes("12:00")){newArr.push(el.dt_txt)
// weatherArr.push(el.weather[0].main)
// }

// });
// console.log(newArr)
// console.log(weatherArr)
// }).catch(err => {
//     console.log(`Error!!`)
// });
