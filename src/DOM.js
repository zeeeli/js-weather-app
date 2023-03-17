const city = document.querySelector("h1");
const country = document.querySelector("h2");
const temperature = document.querySelector("h3");
const temperatureMax = document.getElementById("high");
const temperatureMin = document.getElementById("low");
const weatherImg = document.getElementById("weather-image");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const des = document.getElementById("weather-des");

function DOMUpdate(data, unit) {
  // update DOM elements to match api data
  country.textContent = data.sys.country;
  temperature.textContent = data.main.temp.toFixed();
  temperatureMax.textContent = data.main.temp_max.toFixed();
  temperatureMin.textContent = data.main.temp_min.toFixed();
  des.textContent = data.weather[0].description;
  des.textContent = des.textContent // capitalize first letter of each word in description
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
  weatherImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  if (unit == "imperial") wind.textContent = `${data.wind.speed} mph`;
  if (unit == "metric") wind.textContent = `${data.wind.speed} m/s`;
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

  // replace loading animation with city name last
  city.textContent = data.name;
}

function convertUnits(current) {
  let t, tMax, tMin, speed;

  // temp conversion
  const fToC = (f) => ((f - 32) / 1.8).toFixed();
  const cToF = (c) => (c * 1.8 + 32).toFixed();

  // speed conversions
  const metersToMph = (s) => (s * 2.237).toFixed(2);
  const mphToMeters = (s) => (s / 2.237).toFixed(2);

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

export { DOMUpdate, convertUnits };
