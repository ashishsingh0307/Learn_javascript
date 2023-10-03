// ARRAYS

const myArr = [0, 1, 2, 3, 4, 5];
const myArr1 = [0, 1, 2, 3, 4, 5, true, "hey"];

console.log(`This is the first Element of the array : ${myArr[0]}`);
console.log(`This is the Third Element of the array : ${myArr[2]}`);

const myHeros = ["Steve", "Bucky", "Tony", "Bruce", "Natasha", "Clint"];

const myArr2 = new Array(1, 2, 3, 4);

// ARRAY METHODS

// PUSH & POP METHOD
myArr.push(6);
myArr.push(7);
console.log(myArr);

myArr1.pop();
console.log(myArr1);

//SHIFT & UNSHIFT METHOD
myArr.unshift(9);
console.log(myArr);

myArr.shift()
console.log(myArr);

// CHECKING METHODS

    // INCLUDES
    console.log(myArr.includes(9));
    // INDEXOF
    console.log(myArr.indexOf(3));

// JOIN MAKE ARRAY INTO STRINGS

const newArr = myArr.join();
console.log(newArr);
console.log(typeof newArr);

// Slice, Splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3); // SLICE DOESNOT MANIPULATE THE ORIGINAL ARRAY

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3); // SPLICE MANIPULATE THE ORIGINAL ARRAY
console.log(myn2);
console.log("C ", myArr);


