let time = document.getElementById("time");
let Start = document.getElementById("start");
let Stop = document.getElementById("stop");
let Reset = document.getElementById("reset");

let interval;
let timeLeft = 1500;

function updateTimer(){
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;

    let formatTime = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`

    time.innerHTML = formatTime;
}

function startTimer(){
    interval = setInterval(() =>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's UP")
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


Start.addEventListener("click", startTimer);
Stop.addEventListener("click", stopTimer);
Reset.addEventListener("click", resetTimer);