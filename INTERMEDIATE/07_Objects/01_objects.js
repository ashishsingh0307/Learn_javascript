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

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Full Name"]);
console.log(jsUser[mySymbol]);
console.log(typeof jsUser[mySymbol]);