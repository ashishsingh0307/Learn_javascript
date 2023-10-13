function one(){

    const username = "ashish"; // username VARIBALE CAN BE USED ANYWHERE AS IT HAS A GLOBAL SCOPE IN THIS FUNCTION.

    function two(){

        const website = "youtube"; // IF WE HAVE TO USE WEBSITE VARIBALE WE HAVE TO USE IT IN THE 'two' FUNCTION ONLY.
        console.log(username);

    }

    // console.log(website); // FUNCTION 'one' IS A PARENT FUNCTION AND FUNCTION 'two' IS A CHILD FUNCTION. SO A PARENT FUNCTION CAN NOT ACCESS
                             // CHILD'S ELEMENTS BUT A CHILD CAN USE ITS PARENTS ELEMENTS.

    two();

}

one();

if(true){
    const username = "ajay";

    if(username === "ajay"){
        const website = " youtube";
        console.log(username + website);
    }

    // console.log(website); // CAN NOT ACCESS AS ITS IN THE BLOCK SCOPE WHERE USERNAME IS CHECKED
}
// console.log(username); // CAN NOT ACCESS AS ITS IN THE BLOCK SCOPE OF THE IF ELSE STATEMENT ABOVE


function addone(num){
    return num + 1;
}

addone(5);

const addtwo = function(num){
    return num + 2;
}

addtwo(3);

// video 22 13:42