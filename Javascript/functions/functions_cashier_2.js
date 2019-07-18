function cashier(price, bigBill) {
    var rest = parseFloat((bigBill - price).toFixed(2))
    console.log(`Price: ${price}€ \nPaid amount: ${bigBill}€ \nChange: ${rest}€`)
    if(price<bigBill) {
    var change = calcBill(rest, 20)
    var change = calcBill(change, 10)
    var change = calcBill(change, 5)
    var change = calcBill(change, 2)
    var change = calcBill(change, 1)
    var change = calcBill(change, 0.5)
    var change = calcBill(change, 0.2)
    var change = calcBill(change, 0.1)
    var change = calcBill(change, 0.05)
    var change = calcBill(change, 0.02)
    var change = calcBill(change, 0.01)
    console.log(`==========================`)}
    else { console.log(`Come back when you have money!!`)}}
function calcBill(rest, size) {
    var bill = Math.floor(rest / size)
        if(bill>0){console.log(`${bill} x ${size}€`)}
    return parseFloat((rest % size).toFixed(2));}
   
    cashier(3.79, 50);
    cashier(13.75, 40);
    cashier(1.74, 5);
    cashier(10.75, 5);
    cashier(33, 50);
    cashier(33.12, 44);
    cashier(22.13, 44);