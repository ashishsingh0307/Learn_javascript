const tinderUser = new Object(); // THIS IS SINGLETON OBJECT
// const tinderUser1 = {}; // OUTPUT SAME AS ABOVE BUT THIS IS NON SINGLETON OBJECT

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
const object5 = Object.assign(object1, object2);
// console.log(object3);
console.log("This is spread operator: ",object4);
console.log("This is assign function: ",object5);