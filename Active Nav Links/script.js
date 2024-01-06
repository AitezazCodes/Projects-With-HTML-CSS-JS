let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let verticalScroll = window.scrollY;
        let top = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(verticalScroll >= top && verticalScroll < top + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
            });
            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
        };
    });
};

// ****************************** Javascript for Responsiveness
let menu = document.querySelector(".hamburger");
let cross = document.querySelector(".cancel");
let logo = document.querySelector(".logo");
let navbar = document.querySelector("header nav");
let header = document.querySelector("header");

menu.addEventListener("click", function(){
    logo.style.display = "none";
    navbar.style.width = "100%";
    header.style.padding = "0";
    header.style.backgroundColor = "transparent";
    
    navLinks.forEach(link => {
        link.style.display = "block";
    });
    
    cross.style.display = "block";
    menu.style.display = "none";
});

cross.addEventListener("click", function () {
    closeMenu();
});

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

function closeMenu() {
    logo.style.display = "block";
    navbar.style.width = "none";
    header.style.padding = "20px 15px";
    header.style.backgroundColor = "#11141a";

    navLinks.forEach(link => {
        link.style.display = "none";
    });

    cross.style.display = "none";
    menu.style.display = "block";
    menu.style.float = "right";
}