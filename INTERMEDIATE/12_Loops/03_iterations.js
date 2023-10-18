// FOR OF LOOP

// ["", "", ""] // NORMAL ARRAY ELEMENTS
// [{}, {}, {}] // OBJECTS AS ELEMENTS IN ARRAY

const arr = [1, 2, 3, 4, 5];

// SYNTAX FOR FOR OF LOOP
// for (const iterator of object) { // OBJECT HERE MEANS ELEMENTS OF ARRAY NOT ACTUAL OBJECT DATA TYPE IN JS. || ITERATOR IS A VARIABLE

// }

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!";
for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    console.log(`Each char is ${greet}`);
}

// MAPS IN JS



// FOR IN LOOP

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// video number 29 07:00