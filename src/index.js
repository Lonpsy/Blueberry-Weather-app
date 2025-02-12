function updateTemperature(response) {
  let Temperature = document.querySelector("#tempEntered");
  Temperature.innerHTML = Math.round(response.data.temperature.current);
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
