// function declaration = define a reusable block of code that performe a specific task

/*
function hello(){
console.log("hello");
}
*/
/*
const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}
*/

// function expressions = a way to define functions as values or variables

/*
setTimeout(function () {
    console.log("hello");
    
}, 3000);
*/

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
    return Math.pow(element, 2);
});

const cubes = numbers.map(function cube(element) {
  return Math.pow(element, 3);
});

const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function (accumulator) {
    return accumulator + element;
});

console.log(total);

