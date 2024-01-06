document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".menu");
    let section = document.querySelector(".sec");

    menu.addEventListener("click", function () {
        section.classList.toggle("nav");
    });
});