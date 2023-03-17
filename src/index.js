import { DOMUpdate, convertUnits } from "./DOM";

const cityInput = document.getElementById("city");
const city = document.querySelector("h1");
const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");

async function getTempData(cityName = cityInput.value) {
  try {
    const activeUnit = document.querySelector(".active");
    city.innerHTML = `<div class="lds-ripple"><div></div><div></div></div>`;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9f69f7bb1167cd7c95d68ccb0c1d6ee7&units=${activeUnit.id}`
    );
    const weatherData = await response.json();
    DOMUpdate(weatherData, activeUnit.id);
  } catch (error) {
    alert(
      "Error! Please follow the following syntax: \n\n Washington DC, US \n Paris, FR \n\n Do not use periods or state/province codes"
    );
  }
}

cityInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter" && event.target.value !== "") {
    getTempData();
    cityInput.value = "";
  }
});

imperial.addEventListener("click", (event) => {
  if (imperial.className === "") {
    imperial.className = "active";
    metric.className = "";
    convertUnits("metric");
  }
});

metric.addEventListener("click", (event) => {
  if (metric.className === "") {
    imperial.className = "";
    metric.className = "active";
    convertUnits("imperial");
  }
});

window.onload = () => {
  getTempData("Washington DC");
};
