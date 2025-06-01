const str = "Madam";
const lowerCaseStr = str.toLocaleLowerCase();

// METHOD 1 (NOT USING PREDEFINED FUNCTION) ==============================================================================================================================

function getPalindromeString(string){
    let reversedString = "";
    for(let i = (string.length - 1); i >= 0; i--){
        reversedString += (string[i].toLowerCase());
    }
    return reversedString;
}

const newStr = getPalindromeString(lowerCaseStr);

if(lowerCaseStr === newStr){
    console.log("This is a Palindrome");
}else{
    console.log("This is not a Palindrome")
}

// METHOD 2 (USING PREDEFINED FUNCTION) ==================================================================================================================================

const reversedStr = lowerCaseStr.split("").reverse().join("");

if(lowerCaseStr === reversedStr){
    console.log("This is a Palindrome");
}else{
    console.log("This is not a Palindrome")
}

