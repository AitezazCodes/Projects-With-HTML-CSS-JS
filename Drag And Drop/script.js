const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");
const DragElements = document.querySelectorAll(".rect");

for (elem of DragElements) {
    elem.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}
