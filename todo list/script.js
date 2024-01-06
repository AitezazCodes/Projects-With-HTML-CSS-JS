const inputBox = document.querySelector("#input-box");
const tasksUL = document.querySelector(".tasks");
const button = document.querySelector(".btn");
const search = document.querySelector(".search");

function Add(){
    if( inputBox.value === ""){
        // let msgError = document.createElement("p");
        // msgError.innerHTML = "You must write something";
        // search.appendChild(msgError);
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasksUL.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // Insert the new task at the beginning of the list
        tasksUL.insertBefore(li, tasksUL.firstChild);
    }
    inputBox.value = "";
    saveData();
};
button.addEventListener("click", Add);
inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        Add();
    }
});

tasksUL.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("task");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data", tasksUL.innerHTML);
}

function showData(){
    tasksUL.innerHTML = localStorage.getItem("data");
}
showData();