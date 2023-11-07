const tinderUser = new Object(); // THIS IS SINGLETON OBJECT
// const tinderUser1 = {}; // OUTPUT SAME AS ABOVE BUT THIS IS NON SINGLETON OBJECT / LIETRAL OBJECT

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); // OUTPUT IS SAME WHEN WE ARE MAKING OBJECTS WITH THE HELP OF CONSTRUCTOR

const regularUser = {
    email : "sam@gmail.com",
    fullName : {
        userFullName: {
            firstName : "Ashish",
            lastName : "Singh"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

// MERGING OBJECTS
const object1 = {
    1: "a",
    2: "b"
}

const object2 = {
    3: "c",
    4: "d"
}

const object3 = { object1, object2 };
const object4 = { ...object1, ...object2 };
const object5 = Object.assign(object1, object2); // THIS MEANS THAT OBJECT2 IS MERGING INTO OBJECT1
const object6 = Object.assign({}, object1, object2); // THIS MEANS THAT OBJECT1 AND OBJECT2 IS COMBINED AND MAKE A NEW OBJECT
// console.log(object3);
// console.log("This is normal Merging : ",object3);
// console.log("This is spread operator Merging: ",object4);
// console.log("This is assign function Merging: ",object5);
// console.log("This is assign function with target object be blank : ",object6);
// above line's output is same as the console log on the line 43.


console.log("This is tinder user object: ", tinderUser);

console.log("These are the keys for Tinderuser object : ", Object.keys(tinderUser)); // ALL THE KEYS RETURNED IN AN ARRAY.
console.log("These are the Values for Tinderuser object : ", Object.values(tinderUser)); // ALL THE KEYS RETURNED IN AN ARRAY.
console.log("These are the Entries for Tinderuser object : ", Object.entries(tinderUser)); // ALL THE KEYS AND VALUE RETURN IN A MULTIDIMENTIONAL ARRAY.

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // RETURNS BOOLEAN VALUE IF THAT PROPERTY IS FOUND/NOT FOUND IN THE OBJECT.
console.log(tinderUser.hasOwnProperty('isLogged')); // RETURNS BOOLEAN VALUE IF THAT PROPERTY IS FOUND/NOT FOUND IN THE OBJECT.