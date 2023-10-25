// REDUCER FUNCTION

const myNums = [1,2,3];

// const myTotal = myNums.reduce((acc, currval)=>{
//     console.log(`accumulator : ${acc} and current value : ${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);

// SHOPPING CART

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Python Course",
        price : 3099
    },
    {
        itemName : "CPP Course",
        price : 3999
    },
    {
        itemName : "Data Science Course",
        price : 12999
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0);

console.log(priceToPay);