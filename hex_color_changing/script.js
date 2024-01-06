let button = document.querySelector("#btn");
let span = document.querySelector("#span");

let arr = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

button.addEventListener("click", function(){
    let store = "";

    for(let i = 0; i < 6; i++){
        let index = Math.floor(Math.random() * arr.length);
        store += arr[index];
    }

    span.innerHTML = store;
    
    document.getElementsByTagName("body")[0].style.background = "#" + store;
    
});