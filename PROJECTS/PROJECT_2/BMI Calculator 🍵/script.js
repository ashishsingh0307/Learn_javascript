const form = document.querySelector("form");

// THIS USE CASE WILL GIVE YOU EMPTY
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function(event){
    event.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give valid height";
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please give valid weight";
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.6){
            results.innerHTML = `<span>${bmi}</span><br><span>Under Weight</span>`
        }else if((bmi >= 18.6) && (bmi <= 24.9)){
            results.innerHTML = `<span>${bmi}</span><br><span>Normal Weight</span>`
        }else{
            results.innerHTML = `<span>${bmi}</span><br><span>Over Weight</span>`
        }

    } 
});
