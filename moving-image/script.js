let btn = document.querySelector(".img");
let bodi = document.querySelector(".container")

bodi.addEventListener("mousemove", function(ab){
    btn.style.transform = "translate(-50%, -50%)";
    btn.style.left = ab.x + "px";
    btn.style.top = ab.y + "px";
    btn.style.opacity = 1;
})

bodi.addEventListener("mouseenter", function(ab){
    btn.style.opacity = 1;
})

bodi.addEventListener("mouseleave", function(ab){
    btn.style.opacity = 0;

})