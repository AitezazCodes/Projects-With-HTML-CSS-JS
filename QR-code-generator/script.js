document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector("#input");
    const image = document.querySelector("#qrImg");
    const Button = document.querySelector("#generate");

    Button.addEventListener("click", function(){
        
        if ( input.value.length > 0){
            image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
            image.classList.add("show-img");
        }else{
            input.classList.add("error");
            setTimeout(() => {
                input.classList.remove("error");
            }, 1000);
        }
    });
});
