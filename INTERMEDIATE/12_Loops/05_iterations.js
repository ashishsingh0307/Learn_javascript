const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const myNums = myNumbers.map((num)=> num + 10);

// const newNums = myNumbers.map().map().filter(); // THIS IS CALLED CHAINING METHOD
const newNums = myNumbers
                    .map((num) => num*10) // FIRST MAP FUNCTION WILL MULTIPLY EVERY ELEMENT IN ARRAY WITH THE 10
                    .map((num) => num+1)  // SECOND MAP FUNCTION WILL ADD 1 TO EVERY ELEMENT { THE BASE NUMBER WILL BE THE RESULT FROM THE FIRST MAP FUNCTION i.e. FIRST ELEMENT WILL BE 10 NOW } || MAP FUNCTION RETURN EXPLICITLY
                    .filter((num) => num >= 40) // THIS IS A FILTER FUNCTION THAT USED IN CHAIN || FILTER RETURN ONLY TRUE AND FALSE

console.log(newNums);



// video 30 19:23