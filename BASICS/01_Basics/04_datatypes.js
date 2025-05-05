// =================== OPERATIONS ======================= //

let value = 3
let negValue = -value
console.log(negValue); // -3
 
console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4
console.log(2**2); // 4
console.log(2/3); // 0.66
console.log(2%3); // 2

let str1 = "hello"
let str2 = " Ashish"

let str3 = str1 + str2
console.log(str3); // hello Ashish

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122 ==> first parameter is string thats why it behaved like string and concatinated it.
console.log(1 + 2 + "2"); // 32 ==> first parameter is number thats why it added 1 and 2 and concatinated last 2 as a string.

console.log(true); // true
console.log(+true); // 1
// console.log(true+); // error
console.log(+""); // 0

let num1, num2, num3 

num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++; // POSTFIX OPERATOR
++gameCounter; // PREFIX OPERATOR
console.log(gameCounter);

