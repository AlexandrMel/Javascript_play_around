
function cashier(price, paid) {
    let change = parseFloat(((paid - price) * 100).toFixed(0)),
        checkFor = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    console.log(`===== \nPrice: ${price} € \nPaid amount: ${paid} € \nChange: ${change/100} € \n-----`);
    if (paid < price) return console.log('Give me more money bruder. \n=====')
    else {
        for (i = 0; i < checkFor.length; i++) 
        {console.log(i)
            for (j = 0; change >= checkFor[i]; j++) {
                change -= checkFor[i];
            }
            if (j !== 0) console.log(`${j} x ${checkFor[i]/100}€`);
        }
        return console.log(`=====`);
    }
}

cashier(3.79, 50);
cashier(13.75, 40);
cashier(1.74, 5);
cashier(10.75, 5);
cashier(33, 50);
cashier(33.12, 44);
cashier(22.13, 44);