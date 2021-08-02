const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#submit");
const outputBox = document.querySelector("#output-box")

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber==0){
        outputBox.innerText="Your Birthday is Lucky";
    }
    else{
        outputBox.I=innerText="Oops! Not So Lucky"
    }
}


function checkBirthDateIsLucky(){
    const dob= dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
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