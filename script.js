const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#submit");


checkNumber.addEventListener('click', function getValues(){
    console.log(dateOfBirth.value , luckyNumber.value);
})