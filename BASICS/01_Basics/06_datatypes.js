/*

    PRIMITIVE DATA TYPES

    7 TYPES OF PRIMITIVE DATA TYPES
    1.) STRING
    2.) NUMBER
    3.) BOOLEAN
    4.) NULL
    5.) UNDEFINED
    6.) SYMBOL
    7.) BIG INT

    NON PRIMITIVE / REFERENCE DATA TYPES

    3 TYPES OF NON PRIMITIVE DATA TYPES
    1.) ARRAYS
    2.) OBJECTS
    3.) FUNCTIONS


    JAVASCRIPT IS STATICALLY TYPED OR DYNAMICALLY TYPED LANGUAGE ?
    => JavaScript is a dynamically typed language. In a dynamically typed language like JavaScript, variable data types are determined at runtime, not at the time of variable declaration. This means that you can change the type of a variable during the execution of your program.

*/

const score = 100; // number
const scoreValue = 100.3; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined

const id = Symbol('123'); // symbol
const anotherId = Symbol('123'); // symbol

console.log(id === anotherId);

const bigNumber = 315446468486484n; // bigint

const heros = ["shaktiman", "naagraj", "doga"]; // array
let myProfile = {                               // objects
    name : "Ashish",
    age : 28,
}  
const myfunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);