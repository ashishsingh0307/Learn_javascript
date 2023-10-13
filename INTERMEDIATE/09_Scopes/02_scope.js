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