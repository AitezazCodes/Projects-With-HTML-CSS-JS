let button = document.querySelector("#btn");
let box = document.querySelector(".box");
let tick = document.querySelector("#tick");
let cross = document.querySelector("#cross");
let TextArea = document.querySelector("#writing");
let notesContainer = document.querySelector(".create");

button.addEventListener("click", function(){
    box.style.display = "block";
    TextArea.focus();
});

cross.addEventListener("click", function(){
    box.style.display = "none";
    TextArea.value = "";
});

tick.addEventListener("click", function(){
    if(TextArea.value === ""){
        TextArea.classList.add("error");

        TextArea.addEventListener("animationend", function () {
            TextArea.classList.remove("error");
        });
    }
    else{

        let noteBox = document.createElement("div");
        noteBox.classList.add("note-box");

        let crt = document.createElement("p");
        crt.innerHTML = TextArea.value;
        
        noteBox.appendChild(crt);
        notesContainer.appendChild(noteBox);
        
        noteBox.style.transform = Rotate();
        noteBox.style.background = RandomColor();

        noteBox.addEventListener("dblclick", function(){
            notesContainer.removeChild(noteBox);
        });
    }
    TextArea.value = "";
    TextArea.focus();
});

function Rotate() {
    let rndm = ["rotate(3deg)", "rotate(-9deg)", "rotate(6deg)", "rotate(-3deg)", "rotate(9deg)", "rotate(-6)"];

    return rndm[Math.floor(Math.random() * rndm.length)];
}

function RandomColor(){
    let clr = ["red", "blue", "green", "yellow", "orange", "rgb(39, 220, 7)", "rgb(163, 68, 39)", "rgb(201, 37, 207)", "rgb(55, 86, 207)", "rgb(159, 221, 51)", "rgb(232, 179, 43)", "rgb(105, 53, 188)", "rgb(157, 43, 115)"];

    return clr[Math.floor(Math.random() * clr.length)];
}