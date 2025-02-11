function updateCity(event) {
  event.preventDefault();
  let city = document.querySelector("#enter-city");
  console.log(`${city.value}`);
  let updatedCity = document.querySelector("#weather-app-city");
  updatedCity.innerHTML = city.value;
}

let formInput = document.querySelector("#weather-form");
formInput.addEventListener("submit", updateCity);
