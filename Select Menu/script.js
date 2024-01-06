let select = document.querySelector(".select");
let selectText = document.querySelector(".select-text");
let apps = document.querySelector(".apps");
let app = document.querySelectorAll(".app");
let selectApp = document.querySelector(".select-app");


for (let ap of app){
    ap.onclick = function(){
        selectApp.innerHTML = this.textContent;
    }
}

// select.onclick = function(){
//     apps.classList.toggle("hide")       
// }

select.addEventListener("click", function(){
    apps.classList.toggle("hide");
})
