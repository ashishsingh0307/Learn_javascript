// LITERAL & CONSTRUCTOR

// IF OBJECT IS MADE WITH LITERAL THEN IT WONT BE A SINGLETON OBJECT
// BUT IF IT IS MADE WITH CONSTRUCTOR THEN IT WILL BE A SINGLETON OBJECT
// Object.create (CUNSTROCTOR METHOD OF CREATING OBJECTS)

//SINGLETON

//OBJECT LITERALS

const mySymbol = Symbol("key1");

const jsUser = {

    name : "Ashish", // KEY IS A STRING
    "Full Name" : "Ashish Singh",
    [mySymbol] : "mykey1", // mySymbol is a string if we are checking typeof this key, if we have to use mySymbol as a Symbol Data Object then we have to use [] these symbols.
    age : 18,
    location : "Delhi",
    email : "ashish@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySymbol]); // TO ACCESS A SYMBOL WE DO NOT NEED TO MAKE IT A STRING WE CAN DIRECTLY ACCESS THE SYMBOL AS WE DID IT IN OBJECT.
// console.log(typeof jsUser[mySymbol]);

jsUser.email = "ashish041@gmail.com";
jsUser["email"] = "singh041@gmail.com";

// console.log(jsUser);

// Object.freeze(jsUser); // THIS IS TO FREEZE A OBJECT SO THAT IT'S VALUE CAN'T BE CHANGED.

jsUser["isLoggedIn"] = true; // THIS IS NOT WORKING BECAUSE OF ABOVE FREEZE FUNCTION OF OBJECT.
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());

jsUser.greetingTwo= function(){
    console.log(`Hello ${jsUser["name"]}`); // USING BACKTICKS IS CALLED STRING INTERPOLATION.
    console.log(`Hello ${this["name"]}`);
    console.log(`Hello ${this["Full Name"]}`);
    //all above console logs are doing the same thing except for the last one its printing full name value instead
}

console.log(jsUser.greetingTwo);
console.log(jsUser.greetingTwo());