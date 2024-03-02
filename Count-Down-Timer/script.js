const dayEl = document.getElementById("day"); 
const hourEl = document.getElementById("hour"); 
const minEl = document.getElementById("min"); 
const secEl = document.getElementById("sec");

const newYear = "1 jan 2025";

function countDown(){
    const newDate = new Date();
    const currentDate = new Date(newYear);

    const TotalSeconds = (currentDate - newDate) / 1000;

    const days = Math.floor(TotalSeconds / 3600 / 24);
    const hoursInDay = Math.floor(TotalSeconds / 3600) % 24;
    const minutesInDay = Math.floor(TotalSeconds / 60) % 60;  
    const secondsInDay = Math.floor(TotalSeconds) % 60;

    dayEl.innerHTML = days;
    hourEl.innerHTML = FormatTime(hoursInDay);
    minEl.innerHTML = FormatTime(minutesInDay);
    secEl.innerHTML = FormatTime(secondsInDay);
}
setInterval(countDown, 1000);

function FormatTime(time){
    return time < 10 ? `0${time}` : time;
}