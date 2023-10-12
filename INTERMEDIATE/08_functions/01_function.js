// function sayMyName(){
//     console.log("A");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("S");
//     console.log("H");
// }

// sayMyName -> Reference
// sayMyName() -> Execution

// sayMyName();


function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

// WHEN WE DEFINE A FUNCTION WE PASS PARAMETERS
// WHEN WE CALL A FUNCTION WE PASS ARGUMENTS.

addTwoNumbers(); // OUTPUT WILL BE NaN BECAUSE WE NEED TO GIVE 2 ARGUMENTS AS WE PASSED 2 PARAMETERS IN THE FUNCTION addTwoNumbers()
addTwoNumbers(3, 4); // OUTPUT IS 7.
addTwoNumbers(3, "4"); // OUTPUT WILL BE 34 AS JS CONVERTS BOTH THE ARGUMENTS INTO STRING AND CONCATINATE BOTH. IT IS HAPPENIGN BECAUSE OF TYPE CONVERSION
addTwoNumbers(3, "a"); // OUTPUT WILL BE 3a.

const result = addTwoNumbers(4, 7);

console.log("result : ", result); // IT IS BECAUSE OUR FUNCTION IS NOT RETURNING ANYTHING TO BE STORED.


function sum(number1, number2){
    let answer = number1 + number2; // THIS ANSWER VARIABLE'S SCOPE IS LIMITED TO THE FUNCTION'S SCOPE
    return answer;
    console.log("Ashish"); // AFTER A RETURN STATEMENT NOTHING IS GOING TO EXECUTE IN A FUNCTION. RETURN KEYWORD IS KIND OF A WAY TO TELL A FUNCTION TO STOP ITS PROCESS.
}

const answer = sum(3, 5); // THIS ANSWER VRIABLE IS OUTSIDE OF THE sum() FUNCTION.
console.log("result1 : ", answer);


function loginUserMessage(username){
    return `${username} Just Logged In`;
}

const notification1 = loginUserMessage("Ashish"); // OUTPUT : Ashish Just Logged In
const notification2 = loginUserMessage(""); // OUTPUT :  Just Logged In
const notification3 = loginUserMessage(); // OUTPUT : undefined Just Logged In
console.log(notification1);
console.log(notification2);
console.log(notification3);

function loginUserMessage1(username){
    if(username === undefined){   // CAN ALSO WRITE if(!username){......}, ITS SAME AS WHAT WE DID IN THIS LINE.
        console.log("please enter a username.");
        return;
    }
    return `${username} Just Logged In`;
}

console.log(loginUserMessage1());