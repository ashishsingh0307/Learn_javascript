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

const otherNumber = 23.55654;
const otherNumber1 = 123.55654;
const otherNumber2 = 1123.55654;

// toPrecision is used for getting a precise value and it returns it in a form of a string and takes a number from 1-21.
console.log(otherNumber.toPrecision(3));
console.log(otherNumber1.toPrecision(3));
console.log(otherNumber2.toPrecision(3));

console.log(otherNumber.toPrecision(4));
console.log(otherNumber1.toPrecision(4));
console.log(otherNumber2.toPrecision(4));

const hundreds = 1000000;
// CONVERTING NUMBER INTO A STING OF NUMBER WHICH IS IN US STANDERED
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN')); // THIS IS DOING THE SAME THING JUST ONE DIFFRENCE IS THAT IT IS DOING IT IN INDIA STANDARDS