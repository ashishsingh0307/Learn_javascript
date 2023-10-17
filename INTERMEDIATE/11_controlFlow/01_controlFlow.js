const isUserLoggedIn = true;
const temprature = 41;
const score = 200;

// if(temprature < 50){
//     console.log("less than 50"); // THIS LINE WILL BE EXECUTED IF THE CONDITION IS TRUE
// }
// console.log("more than 50"); // THIS LINE WILL BE EXECUTED EVEN IF CONDITION IS FALSE BECAUSE IT LIES OUTSIDE THE SCOPE OF IF ELSE STATEMENT.

// if(temprature < 50){
//     console.log("less than 50"); // NOW IF CONDITION IS TRUE THEN THIS CODE BLOCK WILL BE EXECUTED.
// }else{
//     console.log("More than 50"); // AND IF THE CONDITION IS FALSE THEN THIS CODE BLOCK WILL BE EXECUTED
// }


if(score > 100){
    const power = "fly"; // IF WE USE VAR KEYWORD INSTEAD OF LET AND CONST KEYWORDS. THEN ON LINE 22 IT WILL PRINT "User Power : fly" IN THE CONSOLE. WHICH IS NOT CORRECT IF THAT IS INSIDE THE SCOPE OF THE CURLY BRACKETS.
    console.log(`User Power : ${power}`);
}

// console.log(power);