let nameError = document.querySelector(".name");
let writeName = document.querySelector("#write-name");
let incorrectName = document.querySelector("#incorrect-name");
function validateName(){
    let name = writeName.value;

    if( name.length == 0){
        incorrectName.textContent = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]+$/)){
        incorrectName.textContent = "Write your full name";
        return false;
    }
    incorrectName.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};
writeName.addEventListener("keyup", validateName);


let phoneError = document.querySelector(".phone");
let writePhone = document.querySelector("#write-phone");
let incorrectPhone = document.querySelector("#incorrect-phone");
function validatePhone(){
    let phone = writePhone.value;

    if( phone.length == 0){
        incorrectPhone.innerHTML = "No. is required";
        return false;
    }
    if( phone.length !== 11){
        incorrectPhone.innerHTML = "No. will be 11 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        incorrectPhone.innerHTML = "Only digits";
        return false;
    }
    incorrectPhone.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};
writePhone.addEventListener("keyup", validatePhone);


let emailError = document.querySelector(".email");
let writeemail = document.querySelector("#write-email");
let incorrectemail = document.querySelector("#incorrect-email");
function validateEmail(){
    let email = writeemail.value;

    if( email.length == 0){
        incorrectemail.innerHTML = "email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        incorrectemail.innerHTML = "invalid email";
        return false;
    }
    incorrectemail.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};
writeemail.addEventListener("keyup", validateEmail);


let messageError = document.querySelector(".message");
let writemessage = document.querySelector("#write-message");
let incorrectmessage = document.querySelector("#incorrect-message");
function validateMessage(){
    let message = writemessage.value;
    let required = 30;
    let left = required - message.length;
    if( left > 0){
        incorrectmessage.innerHTML = `${left} more characters required`;
        return false;
    }
    incorrectmessage.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
};
writemessage.addEventListener("keyup", validateMessage);


let submitError = document.querySelector(".submit");
let writeSubmit = document.querySelector("#btn");
let incorrectSubmit = document.querySelector("#incorrect-submit");
let pop = document.querySelector(".pop-up");
let btn = document.querySelector(".pop-btn");
let form = document.querySelector(".form");

writeSubmit.addEventListener("click", function(event){
    event.preventDefault(); // Prevents the form from submitting
    if( !validateName() || !validatePhone() || !validateEmail() ||!validateMessage()){
        incorrectSubmit.style.display = "block";
        incorrectSubmit.innerHTML = " Plz Check required credentials";
        setTimeout(function(){
            incorrectSubmit.style.display = "none";
        }, 3000);
        return false;
    }
    else{
        pop.style.visibility = "visible";
        form.style.visibility = "hidden";
    }
});

btn.addEventListener("click", function(){
    pop.style.visibility = "hidden";
    form.style.visibility = "visible";
})