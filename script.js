const api_key = "60faed9ac573900b785800fe758f4cd7";
const weather_container = document.getElementById("weather-div");
const search_btn = document.getElementById("search-btn");
const search_input = document.getElementById("search-input");

function displayWeather() {
  const city = search_input.value;
  console.log(city);
  weather_container.style.display = "block";
  document.getElementById("weather").style.display = "none";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`; /* String literal ` (js functionality) can pass variables*/
  fetch(api)
    .then((response) => response.json()) /*request.get response*/
    .then((data) => {
      console.log(data);

      const icon_id = data.weather[0].icon;
      const desc = data.weather[0].description;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      document.getElementById(
        "icon"
      ).src = `https://openweathermap.org/img/wn/${icon_id}@2x.png`;
      document.getElementById("desc").textContent = desc;
      document.getElementById(
        "temp-id"
      ).textContent = `Temperature: ${temp} °C`;
      document.getElementById("hum-id").textContent = `Humidity: ${humidity} %`;
      document.getElementById(
        "wind-id"
      ).textContent = `Wind Speed: ${windSpeed} m/s`;
    });
}

search_btn.addEventListener(
  "click",
  displayWeather
); /*what event of btn, operation or function*/
