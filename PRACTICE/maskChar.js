const str = "123456789987654321";

// METHOD 1 (NOT USING PREDEFINED FUNCTION)

function maskLastFourChar (string, charCount, maskChar){
    const maskCharacter = maskChar.repeat(charCount);
    let result = "";
    for( let i = 0; i < (string.length - charCount); i++ ){
        result += str[i];
    }
    const maskedStr = result + maskCharacter;
    return maskedStr;
}

const newStr = maskLastFourChar(str, 4, "#");
console.log(newStr);

// METHOD 2 (USING PREDEFINED FUNCTION)

const maskChararcter = "#".repeat(4);
const result = str.slice(0, (str.length - 4)) + maskChararcter;
console.log(result)