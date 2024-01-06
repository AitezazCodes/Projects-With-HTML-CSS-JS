let input = document.querySelector("#input");
let buttons = document.querySelectorAll(".btn");

let val = "";

function calculate(num){
    val += num;
    input.value = val;
}

buttons.forEach(button => {
    button.addEventListener("click", function(){
        if ( button.innerText == "="){
            if( input.value != ""){               
                input.style.textAlign = "end";
                input.value = eval(val);
            }
            val = input.value;
        }
        else if( button.innerText == "C"){
            val = "";
            input.value = val;
        }
        else{
            calculate(button.innerText);
        }
    });
});