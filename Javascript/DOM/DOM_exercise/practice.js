//Task 1:
//Create Hi Element using dom method and put in main Div.
//set id as test
//add one button inside mainDiv with click event bind and when click on it
//show message “Hallo i am from onclick with listener”
let hiElement = document.createElement("h1");
hiElement.id = "test"
let mainD = document.getElementById("mainDiv");
mainD.appendChild(hiElement);

let button = document.createElement("button");
mainD.appendChild(button);
button.innerHTML ="Click Me!"
button.onclick = ()=> {
    if(hiElement.innerHTML === ""){
        hiElement.innerHTML  = "Hallo i am from onclick with listener"
    }
       else { hiElement.innerHTML = ""}    
}



//Task 2:

// 2.1 :  Add 4 sub div inside main div.please specify id to every sub div like id=one, id=two, id=three, id=four
let divOne = document.createElement("div");
divOne.id = "one";
mainD.appendChild(divOne)
let divTwo = document.createElement("div");
divTwo.id = "two";
mainD.appendChild(divTwo)
let divThree = document.createElement("div");
divThree.id = "three";
mainD.appendChild(divThree)
let divFour = document.createElement("div");
divFour.id = "four";
mainD.appendChild(divFour)
console.log(mainD)

// 2.2 : Insert p tag with dummy text at sub div two.
divTwo.innerHTML = "<p>Everyone is a SuperMan!!</p>"
// 2.3 : Insert img tag with dummy image at sub div four.
let dummyImg = document.createElement("img");
dummyImg.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png");
divFour.appendChild(dummyImg);
// 2.4 : Insert button tag before the end of the mainDiv with text “Test Me Event”
let newButton = document.createElement("button");
newButton.innerHTML = "Test Me Event";
divFour.insertAdjacentElement("afterend", newButton);
// 2.5 : Insert h6 tag before the main Div tag

let h6 = document.createElement("h6");
mainD.insertAdjacentElement("beforebegin", h6);

// 2.6 : Insert h3 tag just after the main div tag
let h3 = document.createElement("h3");
mainD.insertAdjacentElement("afterend", h3);

// 2.7 : Insert a tag just before the four div tag.
let anchor = document.createElement("a");
divFour.insertAdjacentElement("beforebegin", anchor);

// 2.8 : Insert p tag after the end of the main div tag.
let parag = document.createElement("p");
parag.style.display = "block"
mainD.insertAdjacentElement("afterend", parag);

// 2.9 : Show all div box with adding border but every div has different border color.
let body = document.querySelector("body");
body.style.display ="flex"
body.style.flexDirection ="column"
divOne.style.border ="2px solid red"
divOne.style.height = "30px"
divTwo.style.border ="2px solid yellow"
divTwo.style.height = "30px"
divTwo.style.textAlign = "center"
divThree.style.border ="2px solid blue"
divThree.style.height = "30px"
divFour.style.border ="2px solid red"
divFour.style.height = "390px"
// 2.10 : Set background color for the p tag and foreground color for the text inside of the p tag.
parag.style.backgroundColor = "yellow"
parag.innerHTML = "Dummy text"
parag.style.color = "red"
parag.style.textAlign = "center"
// 2.11 : Change a element/tag url link color from the blue to dark red.
anchor.innerHTML = "Some random Link"
anchor.setAttribute("href", "https://www.youtube.com/watch?v=DxIBrv5JW4c&list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMPIh2xe4jnpk&index=11");
anchor.style.color = "darkred"
// 2.12 : Apply onclick event to button and Change text “Test Me Event” of the button.
newButton.onclick = () => {
    if(newButton.innerHTML === "Test Me Event"){
        newButton.innerHTML = "Tested!" 
    }
    else { newButton.innerHTML = "Test Me Event"}
}
// 2.13 : Add button and assign text “Change href” and bind the function which change the href of the a tag.
let hrefButton = document.createElement("button");
hrefButton.innerHTML = "Change href"
anchor.insertAdjacentElement("afterend", hrefButton);
hrefButton.onclick = ()=> {
    anchor.setAttribute("href", "https://www.w3schools.com/jsref/dom_obj_attributes.asp");
}

// 2.14 : Add button and assign text “Calculate” and perform the +, - and / and display in the front/page.


// 2.15 : Add h4 tag with id “greeting” , text “Hallo DCI” and p tag with id “thedate”, text How are you?

let h4 = document.createElement("h4");
h4.id = "greeting"
h4.innerHTML = "Hallo DCI"
 let newParag = document.createElement("p");
 newParag.id = "thedate";
 newParag.innerHTML = "How are you?"
 body.appendChild(h4);
 body.appendChild(newParag);




// 2.16 : Add input type “text” and id “myname”
// 2.17 : Add button with id “saymyname”, text “Say hallo”.
// 2.18 : Get name which entered in the textbox myname and show when click on the button “saymyname” and also need to replace “DCI” text with entered name from the h4.
// using the following method.
// DOMOBJ1.insertAdjacentElement( position, DOMOBJ2 )
// DOMOBJ1.insertAdjacentHTML( position, string )
// position = “beforebegin” => Before DOMOBJ1 itself
// position = “afterbegin” => Inside, before 1st child
// position = “beforeend” => Inside, after last child
// position = “afterend” => After DOMOBJ1 itself
// */