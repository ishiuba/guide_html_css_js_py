/* eventListener = Listen for specific events to create interactive web pages
events: click, mouseover, mouseout
.addEventListener(event, function);
*/

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");
/*
function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCHIE! 😓"
}*/

myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCHIE! 😓";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 🥺";
});

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😏";
});