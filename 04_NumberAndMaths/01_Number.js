const score = 400;
console.log(score);
// EXPLICIT NUMBER DEFINATION
const balance = new Number(100);
console.log(balance);

// CONVERTING NUMBER TO STRING
console.log(balance.toString());

// CHECKING THE TYPE AFTER CONVERSION
console.log(typeof(balance.toString()));

// CHACKING THE LENGTH OF THE NUMBER
console.log(balance.toString().length);

// CONVERT NUMBER INTO DECIMAL UPTO 2 PLACE (2 is defined inside the toFixed() function)
console.log(balance.toFixed(2));