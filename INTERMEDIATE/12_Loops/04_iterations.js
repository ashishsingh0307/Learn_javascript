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

console.log(`This is using filter function : ${newNums}`);
console.log('This is using filter function :', newNums1);
console.log(`This is using Foreach Loop : ${newNums2}`);

// Video 30 10:30