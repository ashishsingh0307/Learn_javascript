const accountId = 144553;
let accountEmail = "ashish@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; // NOT ALLOWED

accountEmail = "a@g.c";
accountPassword = "21212121";
accountCity = "Banglore";

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

let a = 3;
console.log(a);

const b = 4;
console.log(b);

console.log(c);
var c = 5;
console.log(c); // IN CASE OF VAR HOISTING IS SUPPORTED BUT IN CASE OF LET AND CONST HOISTING IS NOT SUPPORTED.