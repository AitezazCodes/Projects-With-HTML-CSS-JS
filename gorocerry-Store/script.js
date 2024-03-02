let input = document.querySelector("#input");
let cont = document.querySelector(".container");
let button = document.querySelector("#btn");

input.addEventListener("keydown", function(e){
    if ( e.key === "Enter"){
        if (input.value != ""){
            createLine();
        }
    }
});

function createLine(){
    let p = document.createElement("p");
    p.innerHTML =input.value;
    cont.appendChild(p);

    p.addEventListener("dblclick", function(){
        
        p.style.textDecoration = "line-through";
        p.style.color = "white";

       setTimeout(() => {
            p.remove();
        }, 2000);
    });

    input.value = "";
}

button.addEventListener("click", function(){
    pElements = document.querySelectorAll("p");
    for ( let p of pElements){
        p.remove();
    }
});