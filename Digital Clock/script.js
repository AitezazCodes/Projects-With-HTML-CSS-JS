window.addEventListener("load", function(){
    function update(){
        let date = new Date();
        let sec = date.getSeconds();
        let min = date.getMinutes();
        let hour = date.getHours();
        let ampm = hour >= 12? "PM" : "AM";

        hour = hour % 12;
        hour = hour ? hour : 12;
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        document.querySelector("#hour").innerHTML = hour;
        document.querySelector("#min").innerHTML = min;
        document.querySelector("#sec").innerHTML = sec;
    }
    this.setInterval(update, 1000);
});
