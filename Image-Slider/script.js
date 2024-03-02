document.addEventListener("DOMContentLoaded", function () {

let slides = document.querySelectorAll(".slide");
let Next = document.querySelector("#nxt");
let Previous = document.querySelector("#prv");

let counter = 0;

slides.forEach((img, index) => {
    img.style.left = `${index * 100}%`
});

function imgSlide(){
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
};

Next.addEventListener("click" , function(){
    if (counter < slides.length - 1){
        counter++;
        imgSlide();
    }
});

Previous.addEventListener("click", function(){
    if (counter > 0){
        counter--;
        imgSlide();
    }
});
});
