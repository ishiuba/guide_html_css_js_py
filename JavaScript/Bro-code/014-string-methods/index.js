// string methods = allow you to manipulate and work with text (strings)

/*
let userName = "IamSHIUBA";

let result = userName.startsWith(" ");
let result = userName.endsWith(" ");
let result = userName.includes(" ");

userName.charAt(0);
userName.indexOf("o");
userName.length;
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.toLowerCase();
userName = userName.repeat(3);

if (result){
    console.log("Your username can't include with ' '");   
}
else {
    console.log(userName);
    
}

phoneNumber = phoneNumber.replaceAll("-", "/");
phoneNumber = phoneNumber.padStart(15, "0");
*/
let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.padEnd(15, "0");

console.log(phoneNumber);
