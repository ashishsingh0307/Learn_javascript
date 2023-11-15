// ARROW FUNCTION

// const user = {
//     username : "Ashish",
//     Fees : 999,

//     welcomeMsg : function(){
//         console.log(`${this.username}, Welcome to Website`);
//         console.log(this); // THIS SHOWS US THE OBJECTS INSIDE THE USER
//     }
// }

// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg();

// console.log(this); // THIS RETURNS THE VALUE OF AN EMPTY OBJECT IN NODE ENVIRONMENT BECAUSE IN NODE ENVIRONMENT GLOBAL OBJECT IS EMPTY OBJECT || IN BROWSER SAME CODE RETURN WINDOW OBJECT SOMETHING BECAUSE WINDOW IS A GLOBAL OBJECT

// function chai(){
//     let username = "Ashish";
//     console.log(this.username); // THIS KEYWORD ONLY WORKS IN THE OBJECT NOT IN THE FUNCTION.
//     console.log(this); // GIVING OBJECT FROM THE NODE ENVIRONMENT.
// }

// chai();

// const chai = function(){
//     let username = "Ashish";
//     console.log(this.username); // STILL GIVING UNDEFINED.
//     console.log(this); // GIVING OBJECT FROM THE NODE ENVIRONMENT
// }

// chai();

// ARROW FUNCTION
// const chai = () => { // JUST FUNCTION KEYWORD IS REMOVED FORM THE ABOVE FUNCTION DECLARATION.
//     let username = "Ashish";
//     console.log(this.username); // STILL GIVING UNDEFINED. BECAUSE THIS KEYWORD ONLY WORKS WITH OBJECTS.
//     console.log(this); // GIVING EMPTY OBJECT
// }

// chai();

// BASIC/NORMAL/EXPLICIT ARROW FUNCTION
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// IMPLICIT RETURN
// const addTwo = (num1, num2) => num1 + num2; // THIS RETURN THE VALUE WITHOUT ANY RETURN KEYWORD IN IT. IT IS A SINGLE LINE ARROW FUNCTION.

// const addTwo = (num1, num2) => (num1 + num2);// WHILE IN A FUNCTION WITH CURLY BRACKETS WE HAVE TO USE RETURN KEYWORD TO RETURN ANY VALUE. || BUT WE DONT HAVE TO USE RETURN KEYWORD IN ROUND PARANTHESIS

// IF WE HAVE TO RETURN AN OBJECT IN A IMPLICIT FUNCTION. WE CAN DO SOMETHING LIKE THIS
// const addTwo = (num1, num2) => {username: "Ashish"} // IT WILL RETURN THE UNDEFINED KEYWORD BECAUSE IN IMPLICIT ARROW FUNCTION WE CAN NOT RETURN ANYTHING WITHOUT ROUND BRACKETS.

// const addTwo = (num1, num2) => ({username: "Ashish", sum: num1 + num2});
// console.log(addTwo(4,6));