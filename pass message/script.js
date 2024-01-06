let input = document.querySelector("#input");
let button = document.querySelector("#btn");
let box = document.querySelector(".box");

button.addEventListener("click", function(){
    if (input.value === ""){
        alert("You must write something to add");
    }else{
        let create = document.createElement("p");
            create.textContent = input.value;
            create.classList.add("paragraph"); // Add the class
            box.appendChild(create);
            input.value = ""; 
    }
});