function cityInputDetails(updatedCity) {
  let key = "da7a1b3d460dbtbf7b304o1bb99604f1";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${updatedCity}&key={key}`;
}

function updateCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city");
  let updatedCity = document.querySelector("#weather-app-city");
  updatedCity.innerHTML = city.value;
  cityInputDetails(city.input);
}

let formInput = document.querySelector("#weather-form");
formInput.addEventListener("submit", updateCity);
