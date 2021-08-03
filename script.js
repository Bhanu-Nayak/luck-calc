const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#submit");
const outputBox = document.querySelector("#output-box")

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber==0){
        outputBox.innerText="Your Birthday is Lucky 😀";
    }
    else{
        outputBox.innerText="Oops! Not So Lucky 😕"
    }
}

function checkBirthDateIsLucky(){
    const dob= dateOfBirth.value;
    const sum = calculateSum(dob);
    if(luckyNumber.value&&dob)
    compareValues(sum, luckyNumber.value)
    else
    outputBox.innerText="Please Enter Details Above 😒"
}

function calculateSum(dob){
    dob= dob.replaceAll("-","");
    let sum = 0;
    for(let i=0;i<dob.length;i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkNumber.addEventListener('click', checkBirthDateIsLucky)