document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector(".card");
    let love = document.querySelector("i");

    btn.addEventListener("dblclick", function(){
        love.style.transform = "translate(-50%, -50%) scale(1)";
        love.style.opacity = 0.8;

        setTimeout(function(){
            love.style.opacity = 0;
            love.style.transform = "translate(-50%, -50%) scale(0)";
        }, 1000)
    });   
});
