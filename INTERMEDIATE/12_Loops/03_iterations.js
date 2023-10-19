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
    // console.log(`Each char is ${greet}`);
}

// MAPS IN JS (MAP IN ITSELF IS AN OBJECT IN JS) || MAPS IS USED FOR ITS UNIQUE VALUES STORAGE

const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('FR', "France");
map.set('IND', "INDIA");

console.log(map);

for (const key of map) {
    console.log(key); // OUTPUT WILL BE 4 DIFFERENT ARRAYS WITH KEY VALUE AS AN ELEMENT IN AN ARRAY. BUT WE DONT NEED THAT IN THAT FORMAT WE NEED TO PRINT IN A DIFFERENT WAY.
}

// BEST WAY TO PRINT MAPS VALUE IS TO DESTRUCTURE THE ARRAY.

for (const [key, value] of map) {
    console.log(key,":-",value);
}

// ITERATING OVER AN OBJECT USING FOR OF LOOP

const games = {
    game1 : "NFS",
    game2 : "Assasins Creed",
    game3 : "GTA"
}

// FOR IN LOOP

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// video number 29 07:00