const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  // console.log(`Height is : ${height}`);
  const weight = parseInt(document.querySelector('#weight').value);
  // console.log(`Weight is : ${weight}`);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give us Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give us Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // console.log(bmi);
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is : ${bmi}. <br/> You are Under Weight</span>`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Your BMI is : ${bmi}. <br/> You are in Normal Range</span>`;
    } else {
      results.innerHTML = `<span>Your BMI is : ${bmi}. <br/> You are Over Weight</span>`;
    }
  }
});