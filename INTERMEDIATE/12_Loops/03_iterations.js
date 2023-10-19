//============================== FOR OF LOOP =================================================

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

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");
// map.set('IND', "INDIA");

// console.log(map);

// for (const key of map) {
    // console.log(key); // OUTPUT WILL BE 4 DIFFERENT ARRAYS WITH KEY VALUE AS AN ELEMENT IN AN ARRAY. BUT WE DONT NEED THAT IN THAT FORMAT WE NEED TO PRINT IN A DIFFERENT WAY.
// }

// BEST WAY TO PRINT MAPS VALUE IS TO DESTRUCTURE THE ARRAY.

// for (const [key, value] of map) {
    // console.log(key,":-",value);
// }

// ITERATING OVER AN OBJECT USING FOR OF LOOP

// const games = {
//     'game1' : "NFS",
//     'game2' : "Assasins Creed",
//     'game3' : "GTA"
// }

// const games = {
//     game1 : "NFS",
//     game2 : "Assasins Creed",
//     game3 : "GTA"
// }

// for (const [key, value] of games) {
    // console.log(key,":-",value); // OBJECTS ARE NOT IERATABLE USING FOR OF LOOP
// }

//================================ FOR IN LOOP ======================================

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// const languages = {
//     js : 'javascript',
//     cpp : 'c++',
//     rb : 'Ruby on Rails',
//     swift : 'Swift by Apple'
// } // WHENEVER WE WANT TO ITERATE OVER AN OBJECT WE WILL USE FOR IN LOOP

// for (const key in languages) {
//     console.log(key);
// }

// for (const [key, value] in languages) {
//     console.log(key, ":", value);
// }

// for (const key in languages) {
//     // console.log(key, ":" ,languages[key]);
//     console.log(`${key} shortcut for ${languages[key]}`);
// }

const programming = ["js", "py", "rb", "cpp", "java"];

for (const key in programming) {
    // console.log(key); // ITS PRINTING THE INDEXES OF THE ARRAY
    // console.log(programming[key]);
}

// const map = new Map();
// map.set('IN', "India");
// map.set('USA', "United States of America");
// map.set('FR', "France");
// map.set('IND', "INDIA");

// for (const [key, value] in map) {
//     console.log(key, "-" ,value);
// } // FOR IN LOOP DOESNOT WORK ON MAPS

/*

    ==> WHENEVER WE WANT TO ITERATE OVER OBJECTS WE NEED TO USE FOR IN LOOP
    ==> WHENEVER WE WANT TO ITERATE OVER ARRAYS WE CAN USE BOTH FOR IN AND FOR OF LOOP
    ==> WHENEVER WE WANT TO ITERATE OVER MAPS WE HAVE TO USE FOR OF LOOP

*/


//================================== FOREACH LOOP =======================================

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// coding.foreach( function name(){} ) || IN CALLBACK FUNCTION WE DO NOT GIVE ANY NAME OF THE FUNCTION.
// coding.foreach( function (item){} ) || NOW GIVE A PARAMETER WHICH CAN CALL ARRAY'S ELEMENTS , THIS FUNCTION IS SMART ENOUGH TO KNOW THAT THIS PARAMETER IS CALLING ALL THE ARRAY ELEMENTS.
// NOW THAT WE HAVE LEARNED ABOUT ARROW FUNCTION WE CAN IMPLEMENT ARROW FUNCTION ALSO.
// coding.foreach( (item/element) => {}) || NOW WE USED A ARROW FUNCTION WITH A PARAMETER THAT IS HOW WE USE FOREACH LOOP

// coding.forEach( function (item) {
//     console.log(item);
// });

// coding.forEach((items)=>{
//     console.log(items);
// });

// IF WE HAVE A FUNCTION TO PRINT VALUES WE CAN USE THAT TO IN THE FOREACH LOOP

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe); // WE NEED TO GIVE THIS FUNCTION'S REFERENCE NOT HAVE TO EXECUTE THE FUNCTION.

// WE CAN PASS MORE PARAMETERS IN FOREACH LOOP
// ONE IS ITEM (item/element {names can be anything}) || SECOND IS INDEX(index/key {names can be anything}) || THRID IS ARRAY LIST(arr/arrList {names can be anything})

coding.forEach((one, two, three)=>{
    console.log(one, two, three);
})