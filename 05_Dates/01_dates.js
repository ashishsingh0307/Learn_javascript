// DATES

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString);
console.log(myDate.toLocaleString());

console.log(typeof myDate); // DATE IS AN OBJECT IN JAVASCRIPT

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14");
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("02-14-2023");
console.log(myCreatedDate3.toLocaleString());