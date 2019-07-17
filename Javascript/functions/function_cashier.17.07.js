function cashier(bigBill, price) {
    var rest = bigBill - price
    console.log(`Price: ${price}€`)
    console.log(`Paid amount: ${bigBill}€`)
    console.log(`Change: ${rest}€`)
    calcBill(rest)
}
function calcBill(rest) {
    var XXXXL = 20;
    var XXXL = 10;
    var XXL = 5;
    var XL = 2;
    var L = 1;
    var M = 0.5;
    var S = 0.2;
    var XS = 0.1;
    var XXS = 0.05;
    var XXXS = 0.02;
    var XXXXS = 0.01;

    var billXXXXL = Math.trunc(rest / XXXXL)
    if (billXXXXL > 0) {
        console.log(`${billXXXXL} x 20€`)
    } 
    var rest1 = rest - billXXXXL * XXXXL;

    var billXXXL = Math.trunc(rest1 / XXXL)
    if (billXXXL > 0) {
        console.log(`${billXXXL} x 10€`)
    }
    var rest2 = rest1 - billXXXL * XXXL;
    var billXXL = Math.trunc(rest2 / XXL)
    if (billXXL > 0) {
        console.log(`${billXXL} x 5€`)
    }
    var rest3 = rest2 - billXXL * XXL;
    var billXL = Math.trunc(rest3 / XL)
    if (billXL > 0) {
        console.log(`${billXL} x 2€`)
    }
    var rest4 = rest3 - billXL * XL;
    var billL = Math.trunc(rest4 / L)
    if (billL > 0) {
        console.log(`${billL} x 1€`)
    }
    var rest5 = rest4 - billL * L;
    var billM = Math.trunc(rest5 / M)
    if (billM > 0) {
        console.log(`${billM} x 0.5€`)
    }
    var rest6 = rest5 - billM * M;

    var billS = Math.trunc(rest6 / S)
    if (billS > 0) {
        console.log(`${billS} x 0.2€`)
    }
    var rest7 = rest6 - billS * S;
    var billXS = Math.floor(rest7 / XS)
    if (billXS > 0) {
        console.log(`${billXS} x 0.1€`)
    }
    var rest8 = (rest7 - billXS * XS).toFixed(2);
    var billXXS = Math.floor(rest8 / XXS)
    if (billXXS > 0) {
        console.log(`${billXXS} x 0.05€`)
    }
    var rest9 = (rest8 - billXXS * XXS).toFixed(2);
    var billXXXS = Math.floor(rest9 / XXXS)
    if (billXXXS > 0) {
        console.log(`${billXXXS} x 0.02€`)
    }
    var rest10 = (rest9 - billXXXS * XXXS).toFixed(2);
    var billXXXXS = Math.floor(rest10 / XXXXS)
    if (billXXXXS > 0) {
        console.log(`${billXXXXS} x 0.01€`)
    }
    console.log(`=====================================`)
}
cashier(5, 1.74);
cashier(50, 33);
cashier(44, 33.12);
cashier(44, 22.13);