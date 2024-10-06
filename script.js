const weather_container = document.getElementById("weather-div");
const search_btn = document.getElementById("search-btn"); 
const api_key = "6061162f2f71c44d0b10747cedf80399";
const search_input = document.getElementById("search-input");
const temp_info = document.getElementById("temp-val");

function displayWeather(){
    const city = search_input.value;
    console.log(city);
    weather_container.style.display = "block";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;/* String literal ` (js functionality) can pass variables*/
    fetch(api)
    .then((response) => response.json()) /*request.get response*/
    .then((data) => {
        console.log(data);
        console.log(data.main.temp);
        temp_info.textContent = data.main.temp;
    })


}

search_btn.addEventListener("click",displayWeather);/*what event of btn, operation or function*/
