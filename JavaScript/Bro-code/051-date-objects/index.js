/* Date objects- Objects that contain values that represent dates and times
These date objects can be changed and formatted
*/

/*
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

date.setFullYear(2025);

console.log(date);
*/

const date1 = new Date("2023-12-31");
const date2 = new Date("2023-12-30");

if (date2 > date1) {
    console.log("HAPPY NEW YEAR!");
    
}