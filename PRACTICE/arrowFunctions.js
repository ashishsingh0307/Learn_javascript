// ARROW FUNCTIONS => Short way of writing function introduced in ES6.

// FOR EXAMPLE

// OLD WAY OF WRITING FUNCTION
function sayHi(name){
    return "Hi, " + name;
}

// NEW WAY (Arrow Fucntion)
const sayHiNew = (name) => `Hi, ${name}`;

// EXERCISE 1
// CONVERT THIS FUNCTION INTO ARROW FUNCTION
function multiply(a, b){
    return a*b;
}

//SOLUTION
const multiplyNew = (a, b) => a*b;
// console.log(multiplyNew(2, 3));

// MINI PROJECT

const todos = [
    { 
        task: "Buy Grocieries",
        completed: true, 
    },
    {
        task: "Fix Bike",
        completed: false,
    },
    {
        task: "Call Mom",
        completed: true,
    }
];

const completedTodos = todos.filter(todo => todo.completed);
console.log(completedTodos);



// INTERVIEW QUESTIONS



// QUESTION 1 : What's the difference between a regular function and an arrow function?
// ANSWER 1 : 
// Arrow Funcition is a cleaner, shorter syntax for writing functions in javascript, introduced in ES6. But the main difference is in how they handle the "this" keyword
// In Regular Function, "this" is dynamic - it depends on thwo the function is called.
// In Arrow Function, "this" is lexical - it uses "this" from the surrounding scope.
// EXAMPLE :
// REGULAR FUNCTION 
const user = {
    name: "Ashish",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    }
};
user.greet(); // OUTPUT : Hello, I'm Ashish
// ARROW FUNCTION
const userNew = {
    name: "Ashish",
    greet: () => {
        console.log(`Hello, I'm ${this.name}`);
    }
}
userNew.greet(); // OUTPUT : Hello, I'm undefined
// That's because "this" in arrow function doesn't refer to user, it refers to the outer lexical context - probably "window" or "undefined".
// LEXICAL : ?? 




// QUESTION 2 : Can you use arrow functions in constructors? Why or why not?
// ANSWER 2 : 
// No, you can't use arrow functions as constructors because they don't have their own "this", and they don't bind new.target. So, calling them with new throws an error.
// EXAMPLE :
const Person = () => {
    this.name = name;
};
// const p = new Person('Ashish'); // TypeError
// if you need a constructor, we use Regular Function or a class.




// QUESTION 3 : How does the this keyword behave differently in arrow functions?
// ANSWER 3 : 
// "this" in arrow functions is lexically scoped. It means arrow functions inherit "this" from the parent scope, instead of having their own.
// This is super helpul in callbacks, especially inside React components, setTimeout, or array methods like .map().
// EXAMPLE :
function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}
// new Timer();
// if a regulalr function used inside setInterval, they we have to use .bind(this) or assign var self = this




// QUESTION 4 : What are use-cases where arrow functions should not be used?
// ANSWER 4 : Arrow Functions are great for short callbacks, but they're not good for:
// 1.) Object Methods - "this" won't point to the object.
// 2.) Constructor Functions - they don't support new.
// 3.) When you need dynamic "this" - like event handles in class components.
// EXAMPLE : (bad use)
const dog = {
    sound: 'woof',
    speak: () => {
        console.log(this.sound); //undefined
    }
};
dog.speak(); //undefined




// QUESTION 5 : Convert a function passed into .map() into an arrow function.
// ANSWER 5 : 
// CODE
const numbers = [1, 2, 3];
const doubled = numbers.map(function(n){
    return n * 2;
});
console.log(doubled);
// CONVERTED
const newNumbers = [4, 5, 6];
const newDoubled = newNumbers.map((n) => n * 2);
console.log(newDoubled);



// QUESTION 6 : What is "this" keyword
// Answer : 
// "this" refers to the execution context - the object that is currently executing the code. Depending on how a function is called, "this" canrefer to different things.
// EXAMPLE : (Dynamic "this")
function show(){
    console.log(this);
}

const object = {
    name: "Ashish",
    show: show
};
object.show(); // this = object
// show(); // this = window (in browser) or undefined (in strict mode)

// EXAMPLE : (Static "this")
// Arrow function do not have their own "this". They capture "this" from where they are defined.
const person = {
    name: 'Ashish',
    greet: function() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
person.greet(); //Ashish
// How is this working ??




// QUESTION 7: What is a constructor?
// Answer: 
// A Constructor function is used to create objects. It acts like a blueprint.
// by convention, constructor functions start witha capital letter.
// EXAMPLE :
function newPerson(name, age, gender){
    this.name = name,
    this.age = age,
    this.gender = gender
}
const ashish = new newPerson("Ashish", 29, "Male");
console.log(ashish);
console.log(ashish.name);
console.log(ashish.age);
console.log(ashish.gender);
// BEHIND THE SCENE
// 1.) "new" creates a new empty object
// 2.) "this" is set to that new object
// 3.) the function runds and assigns values to "this"
// 4.) the object is returned automatically

// WE CAN ALSO USE "class" SYNTAX
class classPerson {
    constructor(name){
        this.name = name;
    }
}

// TASKS

// TASK 1 : Convert 5 regular function into arrow function
// 1st regular function
function add(a, b){
    return a + b;
}
// 1st arrow function
const convertedAdd = (a, b) => a+b;
console.log(convertedAdd(2, 3));

// 2nd regular function
function subtract(a, b){
    return a - b;
}
// 2nd arrow function
const convertedSubtract = (a, b) => a - b
console.log(convertedSubtract(5, 3));

// 3rd regular function
function greetings(name){
    console.log(`Good Morning ${name}`);
}
// 3rd arrow function
const convertedGreetings = (name) => console.log(`Good Morning ${name}`);
convertedGreetings("Ashish");

// 4th regular function
function newSayHello(name){
    console.log(`Hello, ${name}`);
}
// 4th arrow function
const convertedNewSayHello = (name) => console.log(`Hello, ${name}`);
convertedNewSayHello("Ashish");

// 5th regular function
function multiply(a, b){
    return a * b;
}
// 5th arrow function
const convertedMultiply = (a, b) => a * b;
console.log(convertedMultiply(5, 4));

// 6th regular function
function isEven(n){
    if(n % 2 === 0){
        console.log(`${n} is even`);
    }else{
        console.log(`${n} is not even`);
    }
}
// 6th arrow function
const convertedIsEven = (n) => n % 2 === 0 ? `${n} is even` : `${n} is not even`;
console.log(convertedIsEven(5));

// MORE EXERCIES

// 1.) convert these into arrow functions

// 1st 
function square(n) {
    return n * n;
}
// 1st converted
const convertedSquare = (n) => n * n;
console.log(convertedSquare(3));

// 2nd
function greetUser(user){
    return `Hi, ${user}`;
}
// converted 2nd
const convertedGreetUser = (user) => `Hi, ${user}`;
console.log(convertedGreetUser("Ashish"));

// 3rd 
function getFirstChar(str) {
    return str.charAt(0);
}
// converted 3rd
const convertedGetFirstChar = (str) => str.charAt(0);
console.log(convertedGetFirstChar("World"));

// 4th
function getRandom(){
    return Math.random();
}
// converted 4th
const convertedGetRandom = () => Math.random();
console.log(convertedGetRandom());