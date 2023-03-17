const cityInput = document.getElementById("city");
const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");

const city = document.querySelector("h1");
const country = document.querySelector("h2");
const temperature = document.querySelector("h3");
const temperatureMax = document.getElementById("high");
const temperatureMin = document.getElementById("low");
const weatherImg = document.getElementById("weather-image");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const des = document.getElementById("weather-des");

async function getTempData(cityName = cityInput.value) {
  try {
    const activeUnit = document.querySelector(".active");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9f69f7bb1167cd7c95d68ccb0c1d6ee7&units=${activeUnit.id}`
    );
    const weatherData = await response.json();
    DOMUpdate(weatherData, activeUnit);
  } catch (error) {
    alert(
      "Error! Please follow the following syntax: \n\n Washington DC, US \n Paris, FR \n\n Do not use periods or state/province codes"
    );
  }
}

function DOMUpdate(data, unit) {
  // update DOM elements to match api data
  city.textContent = data.name;
  country.textContent = data.sys.country;
  temperature.textContent = data.main.temp.toFixed();
  temperatureMax.textContent = data.main.temp_max.toFixed();
  temperatureMin.textContent = data.main.temp_min.toFixed();
  des.textContent = data.weather[0].description;
  weatherImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  if (unit === "imperial") wind.textContent = `${data.wind.speed} mph`;
  if (unit === "metric") wind.textContent = `${data.wind.speed} m/s`;
  humidity.textContent = `${data.main.humidity} %`;

  // check if the sun is up
  let sunUp =
    data.weather[0].icon.charAt(data.weather[0].icon.length - 1) === "d"
      ? true
      : false;

  // choose background image using data
  switch (true) {
    case data.weather[0].main === "Clear" && sunUp:
      document.body.style.backgroundImage = 'url("images/clear-day.jpg")';
      break;
    case data.weather[0].main === "Clear" && !sunUp:
      document.body.style.backgroundImage = 'url("images/clear-night.jpg")';
      break;
    case data.weather[0].main === "Clouds" && sunUp:
      document.body.style.backgroundImage = 'url("images/cloud-day.jpg")';
      break;
    case data.weather[0].main === "Clouds" && !sunUp:
      document.body.style.backgroundImage = 'url("images/cloud-night.jpg")';
      break;
    case data.weather[0].main === "Drizzle" && sunUp:
    case data.weather[0].main === "Rain" && sunUp:
      document.body.style.backgroundImage = 'url("images/rain-day.jpg")';
      break;
    case data.weather[0].main === "Drizzle" && !sunUp:
    case data.weather[0].main === "Rain" && !sunUp:
      document.body.style.backgroundImage = 'url("images/rain-night.jpg")';
      break;
    case data.weather[0].main === "Snow" && sunUp:
      document.body.style.backgroundImage = 'url("images/snow-day.jpg")';
      break;
    case data.weather[0].main === "Snow" && !sunUp:
      document.body.style.backgroundImage = 'url("images/snow-night.jpg")';
      break;
    case data.weather[0].main === "Thunderstorm":
      document.body.style.backgroundImage = 'url("images/thunder.jpg")';
      break;
    case data.weather[0].main === "Mist":
      document.body.style.backgroundImage = 'url("images/mist.jpg")';
      break;
    default:
      document.body.style.backgroundImage = 'url("images/cloud-day.jpg")';
      break;
  }
}

function convertUnits(current) {
  let t, tMax, tMin, speed;

  // temp conversion
  fToC = (f) => ((f - 32) / 1.8).toFixed();
  cToF = (c) => (c * 1.8 + 32).toFixed();

  // speed conversions
  metersToMph = (s) => (s * 2.237).toFixed(2);
  mphToMeters = (s) => (s / 2.237).toFixed(2);

  if (current === "imperial") {
    t = fToC(temperature.textContent);
    tMax = fToC(temperatureMax.textContent);
    tMin = fToC(temperatureMin.textContent);
    speed = mphToMeters(wind.textContent.split(" ")[0]) + " m/s";
  } else if (current === "metric") {
    t = cToF(temperature.textContent);
    tMax = cToF(temperatureMax.textContent);
    tMin = cToF(temperatureMin.textContent);
    speed = metersToMph(wind.textContent.split(" ")[0]) + " mph";
  }

  // adjust DOM
  temperature.textContent = t;
  temperatureMax.textContent = tMax;
  temperatureMin.textContent = tMin;
  wind.textContent = speed;
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
