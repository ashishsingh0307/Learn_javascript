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



