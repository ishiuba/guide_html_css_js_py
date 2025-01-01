/*
DOM Navigation = The process of navigating through the structure of an HTML document using JavaScript.

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/
/*
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";
*/
/*
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
});
*/
/*
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
});
*/
/*
const element = document.getElementById("fruits");
const nextSibiling = element.nextElementSibling;
nextSibiling.style.backgroundColor = "yellow";
*/
/*
const element = document.getElementById("vegetables");
const previousSibiling = element.previousElementSibling;
previousSibiling.style.backgroundColor = "yellow";
*/
/*
const element = document.getElementById("ice-cream");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
*/

const element = document.getElementById("fruits");
const children = element.children;

children[1].style.backgroundColor = "yellow";

