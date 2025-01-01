/* error = An Object that is created to represent a problem that occurs
           Occur often with user input or estabilishng a connection 

           NETWORK ERRORS
           PROMISE REJECTION
           SECURITY ERRORS

           try { } = Encloses code that might potentially cause an error
           catch { } = Catch and handle any thrown Errors from try { }
           finally { } = (optional) Always executes. used mostly for clean up
           ex: close files, close connections, release resources
           
try {
    console.log("Hello");
    NETWORK ERRORS
    PROMISE REJECTION

}
catch (error) {
    console.error(error);
}
finally {

    close files, 
    close connections, 
    release resources
              
    console.log("This always executes");
}
console.log("You have reached the end!");
*/

try {
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    
    if (divisor == 0) {
        throw new Error("You can't divide by zero!");
    }
    if (isNaN(dividend) || isNaN(divisor)){ 
        throw new Error("Values must be a number");
    }

    const result = dividend / divisor;
    console.log(result);
}
catch (error) {
    console.error(error);    
}

console.log("You have reached the end!");
