function cashier(bigBill, price) {
    var rest = (bigBill - price).toFixed(2)
    console.log(`Price: ${price}€ \nPaid amount: ${bigBill}€ \nChange: ${rest}€`)
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
function calcBill(rest, size) {
    var bill = Math.floor(rest / size)
    if (bill > 0) {
        console.log(`${bill} x ${size}€`)}
    return rest1 = (rest - bill * size).toFixed(2);}
cashier(5, 1.74);
cashier(50, 33);
cashier(44, 33.12);
cashier(44, 22.13);