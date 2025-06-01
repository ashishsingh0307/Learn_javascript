// MAP
// Creates a new Array applying a function to each element
// EXAMPLE
const numbers = [1, 2, 3];
// const doubled = numbers.map(n => n * 2);
const doubled = numbers.map((n) => n*2);
console.log(doubled);

// FILTER
// Returns a new array containing only elements that match a condition
// EXAMPLE
const ages = [55, 18, 21, 17];
// const adults = ages.filter(age => age >= 18);
const adults = ages.filter((age) => age >= 18);
console.log(adults);

// REDUCE
// Takes all array elements and accumulates them into one value.
// EXAMPLE
const moreNumbers = [1, 2, 3, 4, 5];
const sum = moreNumbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

// TASK 1 : Use .map(), .filter(), .reduce() on an array of objects
const products= [
    { name: 'pen', price: 10 },
    { name: 'Notebook', price: 50 },
    { name: 'Pencil', price: 15 }
];
// .MAP() to fetch product names
const allProductNames = products.map((product) => product.name);
console.log(allProductNames);

// .FILTER() to filter the product whose price is more than 10
const productsAboveTen = products.filter((product) => product.price > 10);
console.log(productsAboveTen);

// .REDUCE() to get total price of the products
const totalProductPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalProductPrice); 

// EXERCISE OF .MAP() FUNCTION

// 1.) Double each number:
const num = [1, 2, 3, 4];
const doubledNum = num.map((n) => n * 2);
console.log(doubledNum);

// 2.) Convert all strings to uppercase:
const str = ["ashish", "dev"];
const upperCaseStr = str.map((str) => str.toUpperCase());
console.log(upperCaseStr);

// 3.) Get string lengths:
const strings = ["JS", "React", "Node"];
const stringLength = strings.map((str) => str.length);
console.log(stringLength);

// EXCERCISE OF .FILTER() FUNCTION

// 1.) Find all even numbers
const newNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = newNumbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// 2.) keep names longer than 4 char
const names = ['John', "Ashish", "Meera", "Dev"];
const namesLongerThanFourChar = names.filter((str) => str.length > 4);
console.log(namesLongerThanFourChar);

// 3.) Get positive numbers
const allIntegers = [-2, 0, 3, -1, 5];
const positiveNumbers = allIntegers.filter((num) => num >= 0);
console.log(positiveNumbers);

// EXCERCISE OF .REDUCE() FUNCTION

// 1.) Find the max value
const value = [3, 7, 2, 9, 1];
// const maxValue = value.reduce((acc, num) => num > acc ? acc = num : acc, 0); // MY VERSION
const maxValue = value.reduce((acc, num) => num > acc ? num : acc, 0); // CORRECTED AND MORE EFFICIENT METHOD
console.log(maxValue);

// 2.) Count the total characters
const programingLanguages = ['React', "MERN", "Node"];
const countCharacter = programingLanguages.reduce((acc, str) => str.length + acc, 0);
console.log(countCharacter);

// 3.) Make a sentence
const brokenSentences = ['Learning', 'Javascript', 'is', 'fun'];
const combinedSenetence = brokenSentences.reduce((acc, str) => acc + " " + str);
console.log(combinedSenetence);

// EXCERCISE OF .FILTER() & .MAP() 

// 1.) Get names of people 18+
const people = [
    { name: 'Ashish', age: 25 },
    { name: 'John', age: 17 },
    { name: 'Reed', age: 19 }
];
const peopleAboveEighteen = people.filter((people) => people.age > 18).map((people) => people.name);
console.log(peopleAboveEighteen);

// 2.) Get names starting from 'a' and uppercase them.
const namesArray = ['ashish', 'sarah', 'amit'];
const upperCaseNamesWithLetterA = namesArray.filter((str) => str.charAt(0) == 'a').map((str) => str.toUpperCase());
console.log(upperCaseNamesWithLetterA);

// EXCERCISE OF FUNCTION AND .FILTER() and .MAP()

// 1.) accepts an array of number and returns an array of squares of only the even numbers
const numbersArray = (arr) => arr.filter((num) => num % 2 === 0).map((num) => num * num);
console.log(numbersArray([1,2,3,4]));