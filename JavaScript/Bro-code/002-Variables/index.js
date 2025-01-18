/*
Variable = A contaienr that stores a value.
Behaves as if it were the value it contains.
*/

let fullName = "IamSHIUBA";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age}`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;