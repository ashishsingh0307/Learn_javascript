let students = ["aman", "vinay", "apporve", "ashish", "tom"];

function isStudentPresent(array, name){
    for(let i = 0; i < array.length; i++){
        if(array[i] == name){
            console.log("Found the Name");
            return;
        }
    }
    console.log("Not Found");
}

isStudentPresent(students, "david");