let passwordInput  = document.querySelector("#password");
let generate  = document.querySelector("#generate");
let copy  = document.querySelector("#copy");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxxyz";
let numbers = "1234567890";
let symbols  = "!@#$%^&*()_+-={}[];:'/><.,`~";
let All = upperCase + lowerCase + numbers + symbols;

const Length = 12;

generate.addEventListener("click", function(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while( Length > password.length ){
        password += All[Math.floor(Math.random() * All.length)];
    }
    passwordInput.value = password;
});

copy.addEventListener("click", function(){
    passwordInput.select();
    document.execCommand("copy");
});