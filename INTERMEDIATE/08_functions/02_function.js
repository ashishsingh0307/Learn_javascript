function calculateCartPrice(...num1){ // WHATEVER STARTS WITH 3 DOTS {...} IT IS CALLED REST OPERATOR AND SPREAD OPERATOR. IT JUST DIFFERS FROM USE CASE TO USE CASE. HERE IT IS A REST OPERATOR IN THIS CASE.
    return num1;
}

function calculateCartPrice1(val1, val2, ...num1){ // WHATEVER STARTS WITH 3 DOTS {...} IT IS CALLED REST OPERATOR AND SPREAD OPERATOR. IT JUST DIFFERS FROM USE CASE TO USE CASE. HERE IT IS A REST OPERATOR IN THIS CASE.
    return num1;
}


console.log(calculateCartPrice(200, 300, 400, 500, 2000)); // THIS IS RETURNING AN ARRAY OF ALL THE ARGUMENTS PASSED.
console.log(calculateCartPrice1(200, 300, 400, 500, 2000)); // THIS IS RETURNING AN ARRAY OF REST OF THE ARGUMENTS PASSED AFTER val1 and val2.

// HOW TO USE OBJECTS IN FUNCTIONS

const user = {
    username : "Parakh",
    age : 24
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user);

// WE CAN ALSO PASS AN OBJECT WHILE CALLING A FUNCTION

handleObject({
    username : "Ashish",
    age : 25
})