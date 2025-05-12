const str = "The quick brown fox jumps over the lazy dog";

function removeVowels(string){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let updatedStr = "";
    for (let char of string){
        if(!vowels.includes(char)){
            updatedStr += char.toLowerCase();
        }
    }
    return updatedStr;
}

const newStr = removeVowels(str);
console.log(newStr);