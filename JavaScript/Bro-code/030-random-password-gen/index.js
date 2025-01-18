// RANDOM PASSWORD GENERATOR


function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "!@#$%¨&*()_-+=.,{}?\/<>";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercasechars : "";
    allowedChars += includeUppercase ? uppercasechars : "";
    allowedChars += includeNumbers ? numberchars : "";
    allowedChars += includeSymbols ? symbolchars : "";

    if (length <= 0) {
        return `(password length must be at least 1)`
    }
    if (allowedChars.length === 0) {
        return `(At least 1 set of character needs to be selected)`
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 18;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);

const pass = document.getElementById('pass');

pass.textContent = password;