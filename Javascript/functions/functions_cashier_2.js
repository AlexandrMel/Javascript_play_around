function cashier(price, bigBill) {
    var rest = parseFloat((bigBill - price).toFixed(2))
    console.log(`Price: ${price}€ \nPaid amount: ${bigBill}€ \nChange: ${rest}€`)
    if(price<bigBill) {
    var change = calcBill(rest, 20)
    var change1 = calcBill(change, 10)
    var change2 = calcBill(change1, 5)
    var change3 = calcBill(change2, 2)
    var change4 = calcBill(change3, 1)
    var change5 = calcBill(change4, 0.5)
    var change6 = calcBill(change5, 0.2)
    var change7 = calcBill(change6, 0.1)
    var change8 = calcBill(change7, 0.05)
    var change9 = calcBill(change8, 0.02)
    var change9 = calcBill(change9, 0.01)
    console.log(`==========================`)}
    else { console.log(`Come back when you have money!!`)}}
function calcBill(rest, size) {
    var bill = Math.floor(rest / size)
        console.log(`${bill} x ${size}€`)
    return parseFloat((rest - bill * size).toFixed(2));}
    cashier(3.79, 50);
    cashier(13.75, 40);
    cashier(1.74, 5);
    cashier(10.75, 5);
    cashier(33, 50);
    cashier(33.12, 44);
    cashier(22.13, 44);