const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros); // PUSHES THE SECOND ARRAY INTO THE FIRST ARRAY. SECOND ARRAY WILL BE ADDED TO PREVIOUS ARRAY AND FIRST ARRAY WILL TREAT IT AS A WHOLE DATA LIKE WHOLE ARRAY WILL BE A SINGLE INDEX VALUE

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros); // THIS METHOD RETURN NEW ARRAY BY COMBINING THEM INTO ONE ARRAY.
// console.log(allHeros);

// {USING SPREAD OPERATOR FOR ABOVE CAONCATINATING TASK}
const allNewHeros = [...marvelHeros, ...dcHeros]; // DOES THE SAME WORK AS CONCAT.
console.log(allNewHeros);