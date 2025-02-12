function updateTemperature(response) {
  let Temperature = document.querySelector("#tempEntered");
  let description = document.querySelector("#weather-description");
  let humidity = document.querySelector("#Humidity");
  let speed = document.querySelector("#speed");
  Temperature.innerHTML = Math.round(response.data.temperature.current);
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  speed.innerHTML = `${response.data.wind.speed}km/h`;
  console.log("new date()");
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
