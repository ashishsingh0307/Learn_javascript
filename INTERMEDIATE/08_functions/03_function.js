// ARROW FUNCTION

const user = {
    username : "Ashish",
    Fees : 999,

    welcomeMsg : function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this); // THIS SHOWS US THE OBJECTS INSIDE THE USER
    }
}

// user.welcomeMsg();
// user.username = "Sam";
// user.welcomeMsg();

// console.log(this); // THIS RETURNS THE VALUE OF AN EMPTY OBJECT IN NODE ENVIRONMENT BECAUSE IN NODE ENVIRONMENT GLOBAL OBJECT IS EMPTY OBJECT || IN BROWSER SAME CODE RETURN WINDOW OBJECT SOMETHING BECAUSE WINDOW IS A GLOBAL OBJECT

// function chai(){
//     let username = "Ashish";
//     console.log(this.username); // THIS KEYWORD ONLY WORKS IN THE OBJECT NOT IN THE FUNCTION.
// }

// chai();

// const chai = function(){
//     let username = "Ashish";
//     console.log(this.username); // STILL GIVING UNDEFINED.
// }

// ARROW FUNCTION
const chai = () => { // JUST FUNCTION KEYWORD IS REMOVED FORM THE ABOVE FUNCTION DECLARATION.
    let username = "Ashish";
    console.log(this.username); // STILL GIVING UNDEFINED.
}

chai();