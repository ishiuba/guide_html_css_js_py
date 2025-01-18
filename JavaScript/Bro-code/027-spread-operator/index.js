/*
spread operator = ... allows an iterable such as an array or string to be expanded into separate elements (onpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);

let username = "Iam SHIUBA"
let letters = [...username].join("-");

console.log(letters);
*/

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
