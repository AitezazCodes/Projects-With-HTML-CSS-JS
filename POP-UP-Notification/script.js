let Content = document.querySelector(".content");
let Buttons = document.querySelector("#btn");
let SaveBtn = document.querySelector(".save");
let DeleteBtn = document.querySelector(".delete");
let SavedContainer = document.querySelector(".saved");
let DeletedContainer = document.querySelector(".deleted");
let DoneBtn = document.querySelector("#done");
let CancelBtn = document.querySelector(".cancel");
let DelBtn = document.querySelector(".del");
let PermanentContainer = document.querySelector(".permanent");
let OkBtn = document.querySelector(".ok");
let NothingContainer = document.querySelector(".nothing");
let SavedContent = document.querySelector(".savedcontent");

SaveBtn.addEventListener("click", function(){
    SavedContainer.style.display = "block";
    Content.style.display = "none";
    SaveBtn.style.display = "none";
    DeleteBtn.style.display = "none";
});

DoneBtn.addEventListener("click", function(){
    SavedContainer.style.display = "none";
    SavedContent.style.display = "block";
});

DeleteBtn.addEventListener("click", function(){
    DeletedContainer.style.display = "block";
    Content.style.display = "none";
    SaveBtn.style.display = "none";
    DeleteBtn.style.display = "none";
});

CancelBtn.addEventListener("click", function(){
    DeletedContainer.style.display = "none";
    Content.style.display = "block";
    SaveBtn.style.display = "inline-block";
    DeleteBtn.style.display = "inline-block";
});

DelBtn.addEventListener("click", function(){
    DeletedContainer.style.display = "none";
    PermanentContainer.style.display = "block";
});

OkBtn.addEventListener("click", function(){
    PermanentContainer.style.display = "none";
    NothingContainer.style.display = "block";
});