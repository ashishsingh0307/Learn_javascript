// CLOUSERS
// A closure is when a function remen=mbers the variables from its outer lexical scope, even after the outer function has finished executing.
// This is an example which is used int react hooks (useState, useEffect), private variables, and when creating event listeners with retained context.

// Goal : Understand how inner function retain access to outer varaibles.
// Exercise : Create a function "makeCounter" that returns another function.
//            The returned function should increment and return a number each time it's called.
function makeCounter(){
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
// Steps: 
// 1.) Declare a count variable inside a function called "makeCounter" 
// 2.) Return an inner function.
// 3.) Call the outer function and store the return value.
// 4.) call that stored function multiple times.

const count1 = makeCounter();
const count2 = makeCounter();

console.log(count1());
console.log(count1());

console.log(count2());
console.log(count2());

// Real App: Imagine a React hook that counts button clicks -- that's bascially this!