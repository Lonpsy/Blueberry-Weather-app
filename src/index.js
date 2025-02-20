function updateTemperature(response) {
  let Temperature = document.querySelector("#tempEntered");
  let description = document.querySelector("#weather-description");
  let humidity = document.querySelector("#Humidity");
  let speed = document.querySelector("#speed");
  Temperature.innerHTML = Math.round(response.data.temperature.current);
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  speed.innerHTML = `${response.data.wind.speed}km/h`;
  let date = new Date(response.data.time * 1000);
  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[date.getDay()];
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let realTime = document.querySelector("#dayTime");
  realTime.innerHTML = `${day} ${hour}:${minutes}`;
}

function cityInputDetails(City) {
  let key = "0dbtbf7b304da7a1b3d46o1bb99604f1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${City}&key=${key}&unit=metric`;
  axios.get(apiUrl).then(updateTemperature);
}

function updateCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city");
  let updatedCity = document.querySelector("#weather-app-city");
  updatedCity.innerHTML = city.value;
  cityInputDetails(city.value);
}

let formInput = document.querySelector("#weather-form");
formInput.addEventListener("submit", updateCity);

cityInputDetails("gothenburg");
