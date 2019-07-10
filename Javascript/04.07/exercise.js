//  let year = 1988;
//  let age = 0;
//  do {
//      console.log(`In ${year} I was ${age} years old`);
//      year++;
//      age++;
//  } while (year <= 2019)



let hour = 0;

do {
    if (hour >= 0 && hour <= 8) {
        console.log(`The hour is ${hour}: It's still night outside`);
    }
    else if (hour > 8 && hour <= 16) {
            console.log(`The hour is ${hour}: OHMAGORD it's hot outside`);   
        }
    else if (hour > 16 && hour <= 22) {
            console.log(`The hour is ${hour}: It's quite better actually now`);
        }
        else ( console.log(`The hour is ${hour}: Bye bye I am going to bed`));
        hour++;
    // console.log(`The hour is ${hour}...`);
    // hour++
} while (hour <= 24);


