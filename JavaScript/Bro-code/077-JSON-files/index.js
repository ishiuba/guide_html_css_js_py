/*
JSON = (JavaScript Object Notation) data-nterchange format
Used for exchanging data between a server and a web application
JSON files {key:value} OR [value1, value2, value3]

JSON.stringify() = converts a JS object to a JSON string.
JSON.parse() = converts a JSON string to a JS object.
*/
/*
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
  {"name": "Patrick", "age": 34, "isEmployed": false},
  {"name": "Squidward", "age": 50, "isEmployed": true},
  {"name": "Sandy", "age": 27, "isEmployed": false}]`;

//const jsonString = JSON.stringify(people);
const parseData = JSON.parse(jsonNames);

console.log(parseData);
*/

fetch("people.json").then(response => response.json()).then(values => values.forEach(value => console.log(value.isEmployed)));