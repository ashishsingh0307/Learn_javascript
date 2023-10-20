// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// });

// console.log(values); // FOREACH DOESNOT RETURN ANY VALUE

const myNums = [1,2,3,4,5,6,7,8,9,10];

// FILTER FUNCTION IS ALSO SIMILAR TO FOREACH LOOP WHICH REQUIRES A CALLBACK FUNCTION.
const newNums = myNums.filter((num)=> num >= 5); // FILTER ONLY WORK WHEN WE ASSIGN IT TO A VARIABLE.
// const newNums = myNums.filter((num)=> {num >= 5}); || THIS DID NOT WORK BECASUE WHEN WE USE CURLY BRACKETS WE STARTED A SCOPE ADN WHENEVER WE START A SCOPE WE NEED TO RETURN A VALUE {EXPLAINED IN 03_FUNCTION.JS FILE}
const newNums1 = myNums.filter((num)=>{ return num <= 5 })

const newNums2 = [];

myNums.forEach((num)=>{
    if(num > 4){
        newNums2.push(num);
    }
})

// console.log(`This is using filter function : ${newNums}`);
// console.log('This is using filter function :', newNums1);
// console.log(`This is using Foreach Loop : ${newNums2}`);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];



const userBooks = books.filter((bk) => bk.genre === 'History');

console.log(userBooks);

// Video 30 10:30