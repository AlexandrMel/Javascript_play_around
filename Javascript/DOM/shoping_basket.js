let addGiftObj = document.getElementById('addGift');
addGiftObj.onclick = () => {
    console.log('addGift button clicked ...');
    let giftObj = document.getElementById('gift');
    console.log(giftObj.value);
    let shoppingObj = document.getElementById('shoppingList');
    let newGifObj = document.createElement('li');
    newGifObj.innerHTML = giftObj.value;
    shoppingObj.appendChild(newGifObj);
     //after adding clear the textbox
     giftObj.value="";
}

//remove last gift button click
let removeLastGiftObj = document.getElementById("removeLastGift");
removeLastGiftObj.onclick = () => {
    let allGiftObj = document.querySelectorAll("#shoppingList > li");
     if(allGiftObj.length >0){ allGiftObj[allGiftObj.length-1].remove()}
}
