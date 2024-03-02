let button = document.querySelector("#btn");
let container = document.querySelector(".main");
let notify = document.querySelector(".notification");
let count = 0;

button.addEventListener("click", function(){
    count++;
    if(notify !== null){
        notify.style.opacity = 1;
        notify.innerHTML = count;
        notify.style.animation = "blink 1s infinite ease-in-out alternate";
    }
});