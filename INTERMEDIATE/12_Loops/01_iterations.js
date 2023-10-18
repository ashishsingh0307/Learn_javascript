// FOR LOOP

// SYNTAX ::
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is the best number");
    }
    // console.log(element);
}

for (let i = 0; i < 3; i++) {
    // console.log(`Outer Loop Value : ${i}`);
    for (let j = 0; j < 3; j++) {
        // console.log(`Inner Loop Value : ${j} and outer loop : ${i}`);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`Table for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }

}