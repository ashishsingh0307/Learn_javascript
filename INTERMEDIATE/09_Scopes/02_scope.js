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


console.log(addone(5));
function addone(num){ // FUNCTION DECLARATION NORMAL WAY || WHEN DECLARED THIS WAY HOISTING IS SUPPORTED
    return num + 1;
}


console.log(addtwo(3));
const addtwo = function(num){ // FUNCTION DECLARATION USING VARIABLES || WHEN DECLARED THIS WAY HOISTING IS NOT SUPPORTED BECAUSE WE CAN ONLY USE VAR KEYWORD FOR HOISTING. CONST AND LET DOES NOT SUPPORT HOISTING.
    return num + 2;
}