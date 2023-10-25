// REDUCER FUNCTION

const myNums = [1,2,3];

// const myTotal = myNums.reduce((acc, currval)=>{
//     console.log(`accumulator : ${acc} and current value : ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);