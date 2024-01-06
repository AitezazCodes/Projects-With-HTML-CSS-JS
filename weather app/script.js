const apiKey = "fbc9c4a11538e971ed830cbfa8be192c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".image");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("#btn");

async function checkWeather(city){
    if(city === "") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".card").style.height = "15vh";
        document.querySelector(".weather").style.display = "none";
        return; // Exit the function if the city is empty
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if ( response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".card").style.height = "15vh";
        document.querySelector(".weather").style.display = "none";
    }

    else{
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".pressure").innerHTML = data.main.pressure + "mb";

    if ( data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if ( data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sun.png";
    }
    else if ( data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if ( data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/storm.png";
    }
    else if ( data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/tstorm.png";
    }
    else if ( data.weather[0].main == "Haze"){
        weatherIcon.src = "images/haze.png";
    }
    else{
        weatherIcon.src = "images/clearSky.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".card").style.height = "65vh";
    document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", function(){
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevents the default action of submitting the form
        checkWeather(searchBox.value);
    }
});
