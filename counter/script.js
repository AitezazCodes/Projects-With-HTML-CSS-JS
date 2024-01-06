let para = document.querySelector("#para");
let increase = document.querySelector("#inc");
let decrease = document.querySelector("#dec");


let count = 0;
function update(num){
    count += num;
    para.innerHTML = count;
};
increase.addEventListener("click", function() {
    update(1);
});

decrease.addEventListener("click", function() {
    update(-1);
});