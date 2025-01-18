/*
H1 EXAMPLE

STEP 1 - CREATE
STEP 2 - ADD ATTRIBUTES/PROPERTIES
STEP 3 - APPEND ELEMENT TO DOM
REMOVE HTML ELEMENT

const newH1 = document.createElement("h1");
newH1.textContent = "I like pizza!";
newH1.id = "newH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
*/

//document.body.appendChild(newH1);
//document.body.prepend(newH1);
//document.getElementById("box1").append(newH1);
//document.getElementById("box1").prepend(newH1);

//const box2 = document.getElementById("box2");
//document.body.insertBefore(newH1, box1);

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[0]);

//document.getElementById("box1").removeChild(newH1);

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

document.getElementById("fruits").prepend(newListItem);