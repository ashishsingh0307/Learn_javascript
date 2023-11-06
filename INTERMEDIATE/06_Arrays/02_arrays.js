const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros); // PUSHES THE SECOND ARRAY INTO THE FIRST ARRAY. SECOND ARRAY WILL BE ADDED TO PREVIOUS ARRAY AND FIRST ARRAY WILL TREAT IT AS A WHOLE DATA LIKE WHOLE ARRAY WILL BE A SINGLE INDEX VALUE

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros); // THIS METHOD RETURN NEW ARRAY BY COMBINING THEM INTO ONE ARRAY.
// console.log(allHeros);

// {USING SPREAD OPERATOR FOR ABOVE CONCATINATING TASK}
const allNewHeros = [...marvelHeros, ...dcHeros]; // DOES THE SAME WORK AS CONCAT.
console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const usableAnotherArray = anotherArray.flat(Infinity);
console.log(usableAnotherArray);

console.log(Array.isArray("Ashish"));
console.log(Array.from("Ashish"));
console.log(Array.from(1234567890));
console.log(Array.from({name : "Ashish"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = [400, 500, 600];

console.log(Array.of(score1, score2, score3, ...score4)); // MAKES AN ARRAY FROM ELEMENTS