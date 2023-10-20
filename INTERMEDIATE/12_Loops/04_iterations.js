// const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// });

// console.log(values); // FOREACH DOESNOT RETURN ANY VALUE

const myNums = [1,2,3,4,5,6,7,8,9,10];

// FILTER FUNCTION IS ALSO SIMILAR TO FOREACH LOOP WHICH REQUIRES A CALLBACK FUNCTION.
const newNums = myNums.filter((num)=> num > 4); // FILTER ONLY WORK WHEN WE ASSIGN IT TO A VARIABLE.
console.log(newNums);