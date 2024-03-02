let text = document.querySelector("p");
let change = document.querySelector(".add");

let check = 0;

change.addEventListener("click", function(){

   if ( check == 0){
    text.innerHTML = "You are Friends";
    text.style.color = "green";
    change.innerHTML = "Remove";
    check = 1;
   }
   
   else{
    text.innerHTML = "You are Strangers";
    text.style.color = "red";
    change.innerHTML = "Friends"
    check = 0;
   }

})