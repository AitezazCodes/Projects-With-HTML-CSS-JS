let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");


// For Starting the Timer
let start;
let intervalID;
let timerRunning = false;
let elapsedPausedTime = 0;

function toggleTimer(){
    if(! timerRunning){
        start = Date.now() - elapsedPausedTime;
        intervalID = setInterval(updateTimer, 1000);
        timerRunning = true;
        startBtn.disabled = true;
    }
    else{
        clearInterval(intervalID);
        elapsedPausedTime = Date.now() - start;
        timerRunning = false;
        startBtn.disabled = false;
    }
}
function updateTimer(){
    let current = Date.now();

    let elapsedTime = Math.floor((current - start) / 1000);
    
    let hours = Math.floor(elapsedTime / 3600);
    let minutes = Math.floor((elapsedTime % 3600) / 60);
    let seconds = Math.floor(elapsedTime % 60);

    hour.textContent = hours < 10 ? "0" + hours : hours;
    min.textContent = minutes < 10 ? "0" + minutes : minutes;
    sec.textContent = seconds < 10 ? "0" + seconds : seconds;
}
startBtn.addEventListener("click", toggleTimer);


// For Stoping Timer
function stopTimer(){
    clearInterval(intervalID);
    elapsedPausedTime = Date.now() - start;
    timerRunning = false;
    startBtn.disabled = false;
}

stopBtn.addEventListener("click", stopTimer);


// For Reseting the Timer
function resetTimer(){
    stopTimer();
    hour.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";
    elapsedPausedTime = 0;
    timerRunning = false;
}
resetBtn.addEventListener("click", resetTimer);