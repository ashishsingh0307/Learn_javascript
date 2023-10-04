const tinderUser = new Object(); // THIS IS SINGLETON OBJECT
// const tinderUser1 = {}; // OUTPUT SAME AS ABOVE BUT THIS IS NON SINGLETON OBJECT

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // OUTPUT IS SAME WHEN WE ARE MAKING OBJECTS WITH THE HELP OF CONSTRUCTOR

const regularUser = {
    email : "sam@gmail.com",
    fullName : {
        userFullName: {
            firstName : "Ashish",
            lastName : "Singh"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);

