const isUserLoggedIn = true;
const temprature = 41;
const score = 200;
const balance = 1000;

// if(temprature < 50){
//     console.log("less than 50"); // THIS LINE WILL BE EXECUTED IF THE CONDITION IS TRUE
// }
// console.log("more than 50"); // THIS LINE WILL BE EXECUTED EVEN IF CONDITION IS FALSE BECAUSE IT LIES OUTSIDE THE SCOPE OF IF ELSE STATEMENT.

// if(temprature < 50){
//     console.log("less than 50"); // NOW IF CONDITION IS TRUE THEN THIS CODE BLOCK WILL BE EXECUTED.
// }else{
//     console.log("More than 50"); // AND IF THE CONDITION IS FALSE THEN THIS CODE BLOCK WILL BE EXECUTED
// }


// if(score > 100){
//     const power = "fly"; // IF WE USE VAR KEYWORD INSTEAD OF LET AND CONST KEYWORDS. THEN ON LINE 22 IT WILL PRINT "User Power : fly" IN THE CONSOLE. WHICH IS NOT CORRECT IF THAT IS INSIDE THE SCOPE OF THE CURLY BRACKETS.
//     console.log(`User Power : ${power}`);
// }

// console.log(power);

// if(balance > 500) console.log("test"); // NOW HERE THE SCOPE IS IMPLICIT. || THIS IS NOT HOW WE WRITE CODE

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(isUserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy Course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}