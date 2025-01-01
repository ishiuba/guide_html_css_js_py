/*
NodeList = Static collection of HTML elements by (id, class, element)
Can be created by using document.querySelectorAll()
Similar to an array, but no (map, filter, reduce)
NodeList won't update to automatically reflect changes
*/
let buttons = document.querySelectorAll(".myButtons");

/* add html/css properties

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😂";
});

*/

/* click event listener
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});
*/

/* mouseover + mouseout event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});
*/

/* add an element

const newButton = document.createElement("button"); //step1
newButton.textContent = "Button 5"; //step2
newButton.classList = ("myButtons");
document.body.appendChild(newButton); //step3

buttons = document.querySelectorAll(".myButtons");
*/

// remove an element

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});
