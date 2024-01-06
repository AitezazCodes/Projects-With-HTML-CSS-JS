let containerLight = document.querySelector(".container-light");
let button = document.querySelector("#btn");

let check = 0;
button.addEventListener("click", function(){
    if( check == 0){
        containerLight.classList.add("container-dark");
        button.textContent = "Light Mode";
        check = 1;
    }else{
        containerLight.classList.remove("container-dark");
        button.textContent = "Dark Mode";
        check = 0;
    }
})