console.log(Math);

// THIS IS TO CONVERT THE NEGATIVE NUMBER TO A POSITIVE NUMBER && POSITIVE NUMBER REMAINS POSITIVE NUMBER
console.log("This is the aboslute function value for the number -4: " + Math.abs(-4));

// THIS FUNCTION IN MATH ROUNDS OF THE VALUE JUST LIKE WE DO IN DAILY LIFE
console.log("This is the round function value for the number 4.4 : " + Math.round(4.4));
console.log("This is the round function value for the number 4.6: " + Math.round(4.6));

// BUT IF WE WANT TO CONTROL OVER WHEN TO GET UPPER VALUE OR LOWER VALUE WE DO THE FOLLOWING
console.log("This is the aboslute function value for the number 4.2: " + Math.ceil(4.2));
console.log("This is the aboslute function value for the number 4.8: " + Math.floor(4.8));

// IF WE WANT TO FIND THE SQUARE ROOT OF ANY NUMBER USING THE MATH LIBRARY OF JAVASCRIPT WE CAN DO THE FOLLOWING
console.log("This is the square root of number 25 : " + Math.sqrt(25));
console.log("This is the square root of number 25 : " + Math.sqrt(64));

// IF WE WANT TO FIND THE MINIMUM VALUE IN THE ARRAY WE CAN USE .min() FUNCTION AND SAME FOR MAXIMUM
console.log("This is the minimum value out of 4,6,10,2 : " + Math.min(4,6,10,2));
console.log("This is the maximum value out of 4,6,10,2 : " + Math.max(4,6,10,2));

// RANDOM NUMBER GENERATOR
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log((Math.floor(Math.random()*10))+1);
// console.log("This is random number generator : " + Math.random());

const min = 10;
const max = 20;

// FORMULA FOR RANDOM NUMBER GEREATOR BETWEEN 2 NUMBERS.
console.log(Math.floor(Math.random() * (max-min + 1)) + min);
