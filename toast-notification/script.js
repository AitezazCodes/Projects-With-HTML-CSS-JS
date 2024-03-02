let btn = document.querySelectorAll(".button");
let toast = document.querySelector(".toast");
let success = document.querySelector(".success");
let error = document.querySelector(".error");
let invalid = document.querySelector(".invalid");


let successMsg = "Successfully Submitted";
let errorMsg = "Error, occured";
let invalidMsg = "Invalid Input";

success.addEventListener("click", function(){
   let createSuccess = document.createElement("div");
   createSuccess.classList.add("successdiv");
   toast.appendChild(createSuccess);
   createSuccess.textContent = successMsg;
});

error.addEventListener("click", function(){
   let createerror = document.createElement("div");
   createerror.classList.add("errordiv");
   toast.appendChild(createerror);
   createerror.textContent = errorMsg;

});

invalid.addEventListener("click", function(){
   let createinvalid = document.createElement("div");
   createinvalid.classList.add("invaliddiv");
   toast.appendChild(createinvalid);
   createinvalid.textContent = invalidMsg;

});

//  btn.forEach(function(button){
//     button.addEventListener("click", function(){
//     let create = document.createElement("div");
//     create.classList.add("msg");
//     if(button.classList.contains("success")){
//       create.textContent = successMsg;  
//     }
//     else if(button.classList.contains("error")){
//       create.textContent = errorMsg;
//     }
//     else{
//       create.textContent = invalidMsg;
//     }
//     toast.appendChild(create);
//  });
// });