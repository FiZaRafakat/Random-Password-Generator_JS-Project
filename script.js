const passwordBox = document.getElementById("input");
const upper_Case = document.getElementById("upper-case");
const lower_Case = document.getElementById("lower-case");
const number = document.getElementById("number");
const specialC = document.getElementById("special-charac");
const totalCharac = document.getElementById("total-charac")

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
const numbers = "1234567890"
const specialCharac = "!@#$%^&*()?{}[]<>~\|=-"

function CreatePassword(){
let password = "" ;
const availableChars = []
if(upper_Case.checked){
    availableChars.push(...upperCase.split(''));
    // password += upperCase[Math.floor(Math.random()* upperCase.length)] (agr 1 select kro to just 1 hi ho)
}
if(lower_Case.checked){
    availableChars.push(...lowerCase.split(''));
}
if(number.checked){
    availableChars.push(...numbers.split(''));
}
if(specialC.checked){
    availableChars.push(...specialCharac.split(''));
}
if (availableChars.length === 0) {
    passwordBox.value = ""; // No characters selected
    return;
}
while(totalCharac.value > password.length){
    password += availableChars[Math.floor(Math.random() * availableChars.length)];
}
passwordBox.value = password 
}
function copyPassword(){
passwordBox.select();
navigator.clipboard.writeText(passwordBox.value)
}

document.getElementById("Btn").addEventListener("click",function(){
    CreatePassword()
})

document.getElementById("copy").addEventListener("click",function(){
    copyPassword()
})