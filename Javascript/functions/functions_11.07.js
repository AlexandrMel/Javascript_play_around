function checkIfPalindrom(phrase) {

    //We take the string
    //We make it lowercase of uppercase
    let lowerPhrase = transformToLowercase(phrase);
    let reversedPhrase = reversePhrase(phrase)

    let res = comparePhrase(lowerPhrase, reversedPhrase)
    //We produce the reversed string
    //let reverserdPhrase = reversePhrase(phrase);
    // We check if original and reverse strings are identical
    //comparePhrase()
    console.log(`The word ${phrase} is a palindrom: ${res}`);


}

function transformToLowercase(str) {
    let ls = str.toLowerCase();
    console.log(ls)
    return ls;
}

function reversePhrase(sent) {
    let res = '';
    let l = sent.length;
    for (i = (l - 1); i >= 0; i--) {
        res = res + sent[i];
        console.log(res)

    }
    return res;
}

function comparePhrase(low, rev) {
    if (low == rev) {
        return true;
    } else {
        return false;
    };
}
// let res = (low == rev)? true : false
// return res
// return (low==rev)?true : false



checkIfPalindrom('mAdaM') //Return true, but send a message that complainsabout the input
checkIfPalindrom('baBYlon') //Return false
checkIfPalindrom('level') //Return true
checkIfPalindrom('i level madam level i') // Return true