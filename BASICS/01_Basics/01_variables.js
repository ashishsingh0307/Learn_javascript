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