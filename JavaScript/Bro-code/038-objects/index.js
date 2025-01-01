/*
object = A collection of related properties and/or methods
         Can represent real world objects (people, products, places)
         object = {key: value, function()}
*/

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log("Hi! I am Spongebob!");
    },
    eat: function () {
        console.log("I am eating a Krabby Patty");
    },
}

person1.sayHello();
person1.eat();

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: no,
    sayHello: () => console.log("Hey,  i'm Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
}

person2.sayHello();
person2.eat();