const axios = require("axios")

// const url = "https://official-joke-api.appspot.com/random_joke"

// axios.get(url).then(response => {
//     let joke = response.data;
//     console.log(joke.setup);

//     for (let i=0; i<5; i++){
//         console.log(`|`)

//     }
//     console.log(joke.punchline)


// });

const name = process.argv[2];
const url = `https://rickandmortyapi.com/api/character/?name=${name}`;

printTheCharacter = (x) => {
            console.log(`Name: ${x.name}`)
            console.log(`Status: ${x.status}`)
            console.log(`Species: ${x.species}`)
}

axios.get(url).then(res => {
    const data = res.data.results;
    // data.forEach(el => {
    //     console.log(`Name: ${el.name}`)
    //     console.log(`Status: ${el.status}`)
    //     console.log(`Species: ${el.species}`)
        
    // });
    data.filter( el => {
        if(el.status == "Alive"){

        printTheCharacter(el);
    }
})
})
.catch(err => {
    console.log(`Did you even watch the show`)
});