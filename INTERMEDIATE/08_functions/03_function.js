// ARROW FUNCTION

const user = {
    username : "Ashish",
    Fees : 999,

    welcomeMsg : function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this); // THIS SHOWS US THE OBJECTS INSIDE THE USER
    }
}

user.welcomeMsg();
user.username = "Sam";
user.welcomeMsg();

console.log(this); // THIS RETURNS THE VALUE OF AN EMPTY OBJECT IN NODE ENVIRONMENT || IN BROWSER SAME CODE RETURN WINDOW SOMETHING.