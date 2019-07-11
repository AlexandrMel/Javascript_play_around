function checkIfPalindrom (phrase) {

//We take the string
//We make it lowercase of uppercase
transformToLowercase(phrase);
let revesedPhrase = reversePhrase(phrase);

//We produce the reversed string
//let reverserdPhrase = reversePhrase(phrase);
// We check if original and reverse strings are identical
//comparePhrase()


}
function transformToLowercase(str) {
    let ls = str.toLowerCase();
    console.log(ls)
    return ls;
}

function reversePhrase(sent) {
    let res ='';
    let l = sent.length;
    for(i=(l-1);i>=0; i--) {
        res = res + sent[i];
        console.log(res)
    }
}

checkIfPalindrom('level')   //Return true
checkIfPalindrom('mAdaM')   //Return true, but send a message that complainsabout the input
checkIfPalindrom('baBYlon') //Return false
//checkIfPalindrom('i level madam level i')  // Return true