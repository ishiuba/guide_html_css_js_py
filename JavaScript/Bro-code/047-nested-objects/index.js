/*
nested objects = Objects inside of other Objects.
                 Allows you to represent more complex data structures
                 Child Object is enclosed by a Parent Object

                 Person{Address{}, ContactInfo{}}
                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}
*/

/*
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water",
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);

for (const property in person.address) {
    console.log(person.address[property]);
}
const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}
*/

class Person{
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street,city,country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 37, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 45, "124 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.address.country);
