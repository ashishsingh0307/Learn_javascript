// SWITCH STAEMENTS

// SYNTAX

    // switch (key) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }

// const month = 3;

// switch (month) {
//     case 1:
//         console.log("January");
//         break;

//     case 2:
//         console.log("February");
//         break; // IF WE DONT USE BREAK AT THIS POINT THEN IT WILL PRINT EVERYTHING BELOW THIS EXCEPT DEFAULT STATEMENT. BREAK IS USED TO BREAK THE FLOW OF THE PROGRAM.

//     case 3:
//         console.log("March");
//         break;

//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// TRUTHY VALUES AND FALSEY VALUES

const userEmail = ""; // IF THIS HAS THE STRING VALUE THEN ONLY IT IS CONSIDERED TRUE APART FROM THAT IT WILL BE CONSIDERED FALSE.

if(userEmail){
    console.log("got user email");
}else{
    console.log("Dont have user emails");
}
