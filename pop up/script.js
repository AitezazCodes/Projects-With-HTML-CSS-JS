let pop = document.querySelector(".pop-up");
let select = document.querySelector(".submit");
let btn = document.querySelector(".pop-btn");

select.addEventListener("click", function(){
    pop.style.visibility = "visible";
});

btn.addEventListener("click", function(){
    pop.style.visibility = "hidden";
})