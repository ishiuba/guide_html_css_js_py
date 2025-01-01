/*
setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (milliseconds)
Times are approximate (varies on the wrokload of the JavaScript runtime env.)

setTimeout(callback,delay);
clearTimeout(timeoutId) = can cancel a timeout before it triggers

function sayHello() {
    window.alert("Hello")
}

const timeoutId = setTimeout(sayHello, 3000);

clearTimeout(timeoutId);
*/

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");   
}

function clearTimeout() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}