// DATES

let myDate = new Date();
console.log(myDate); // OUTPUT : 2023-09-29T03:04:02.547Z

console.log(myDate.toString()); // OUTPUT : Fri Sep 29 2023 08:30:21 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // OUTPUT : Fri Sep 29 2023
console.log(myDate.toISOString()); // OUTPUT : 2023-09-29T03:05:09.556Z
console.log(myDate.toJSON()); // OUTPUT : 2023-09-29T03:05:09.556Z
console.log(myDate.toLocaleDateString); // OUTPUT : [Function: toLocaleDateString]
console.log(myDate.toLocaleString()); // OUTPUT : 9/29/2023, 8:36:39 AM

console.log(typeof myDate); // DATE IS AN OBJECT IN JAVASCRIPT

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate); // OUTPUT : 2023-01-22T18:30:00.000Z
console.log(myCreatedDate.toDateString()); // OUTPUT : Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleString()); // OUTPUT : 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14");
console.log(myCreatedDate2.toLocaleString()); // OUTPUT : 1/14/2023, 5:30:00 AM

let myCreatedDate3 = new Date("02-14-2023");
console.log(myCreatedDate3.toLocaleString()); // OUTPUT : 2/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // OUTPUT : 1695956962495
console.log(myCreatedDate.getTime()); // OUTPUT : 1674412200000
console.log(Date.now()); // OUTPUT : 1695957290574
console.log(Date.now()/1000); // OUTPUT : 1695957290.574
console.log(Math.floor(Date.now()/1000)); // OUTPUT : 1695957290
