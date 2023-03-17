/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsU0FBUyxnREFBZ0QsY0FBYztBQUNsSTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQjtBQUMzRSxpREFBaUQsaUJBQWlCO0FBQ2xFLCtDQUErQyxpQkFBaUI7QUFDaEUsNEJBQTRCLG9CQUFvQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2l0eVwiKTtcbmNvbnN0IGltcGVyaWFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBlcmlhbFwiKTtcbmNvbnN0IG1ldHJpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0cmljXCIpO1xuXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuY29uc3QgdGVtcGVyYXR1cmVNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XG5jb25zdCB0ZW1wZXJhdHVyZU1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93XCIpO1xuY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbWFnZVwiKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG5jb25zdCBkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItZGVzXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRUZW1wRGF0YShjaXR5TmFtZSA9IGNpdHlJbnB1dC52YWx1ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFjdGl2ZVVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9OWY2OWY3YmIxMTY3Y2Q3Yzk1ZDY4Y2NiMGMxZDZlZTcmdW5pdHM9JHthY3RpdmVVbml0LmlkfWBcbiAgICApO1xuICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIERPTVVwZGF0ZSh3ZWF0aGVyRGF0YSwgYWN0aXZlVW5pdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoXG4gICAgICBcIkVycm9yISBQbGVhc2UgZm9sbG93IHRoZSBmb2xsb3dpbmcgc3ludGF4OiBcXG5cXG4gV2FzaGluZ3RvbiBEQywgVVMgXFxuIFBhcmlzLCBGUiBcXG5cXG4gRG8gbm90IHVzZSBwZXJpb2RzIG9yIHN0YXRlL3Byb3ZpbmNlIGNvZGVzXCJcbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIERPTVVwZGF0ZShkYXRhLCB1bml0KSB7XG4gIC8vIHVwZGF0ZSBET00gZWxlbWVudHMgdG8gbWF0Y2ggYXBpIGRhdGFcbiAgY2l0eS50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgY291bnRyeS50ZXh0Q29udGVudCA9IGRhdGEuc3lzLmNvdW50cnk7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gZGF0YS5tYWluLnRlbXAudG9GaXhlZCgpO1xuICB0ZW1wZXJhdHVyZU1heC50ZXh0Q29udGVudCA9IGRhdGEubWFpbi50ZW1wX21heC50b0ZpeGVkKCk7XG4gIHRlbXBlcmF0dXJlTWluLnRleHRDb250ZW50ID0gZGF0YS5tYWluLnRlbXBfbWluLnRvRml4ZWQoKTtcbiAgZGVzLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICB3ZWF0aGVySW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93LyR7ZGF0YS53ZWF0aGVyWzBdLmljb259LnBuZ2A7XG4gIGlmICh1bml0ID09PSBcImltcGVyaWFsXCIpIHdpbmQudGV4dENvbnRlbnQgPSBgJHtkYXRhLndpbmQuc3BlZWR9IG1waGA7XG4gIGlmICh1bml0ID09PSBcIm1ldHJpY1wiKSB3aW5kLnRleHRDb250ZW50ID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtL3NgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0gJWA7XG5cbiAgLy8gY2hlY2sgaWYgdGhlIHN1biBpcyB1cFxuICBsZXQgc3VuVXAgPVxuICAgIGRhdGEud2VhdGhlclswXS5pY29uLmNoYXJBdChkYXRhLndlYXRoZXJbMF0uaWNvbi5sZW5ndGggLSAxKSA9PT0gXCJkXCJcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBmYWxzZTtcblxuICAvLyBjaG9vc2UgYmFja2dyb3VuZCBpbWFnZSB1c2luZyBkYXRhXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiQ2xlYXJcIiAmJiBzdW5VcDpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltYWdlcy9jbGVhci1kYXkuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiQ2xlYXJcIiAmJiAhc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvY2xlYXItbmlnaHQuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiQ2xvdWRzXCIgJiYgc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvY2xvdWQtZGF5LmpwZ1wiKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRhdGEud2VhdGhlclswXS5tYWluID09PSBcIkNsb3Vkc1wiICYmICFzdW5VcDpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltYWdlcy9jbG91ZC1uaWdodC5qcGdcIiknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkYXRhLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJEcml6emxlXCIgJiYgc3VuVXA6XG4gICAgY2FzZSBkYXRhLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJSYWluXCIgJiYgc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvcmFpbi1kYXkuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiRHJpenpsZVwiICYmICFzdW5VcDpcbiAgICBjYXNlIGRhdGEud2VhdGhlclswXS5tYWluID09PSBcIlJhaW5cIiAmJiAhc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvcmFpbi1uaWdodC5qcGdcIiknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkYXRhLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJTbm93XCIgJiYgc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvc25vdy1kYXkuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiU25vd1wiICYmICFzdW5VcDpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltYWdlcy9zbm93LW5pZ2h0LmpwZ1wiKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRhdGEud2VhdGhlclswXS5tYWluID09PSBcIlRodW5kZXJzdG9ybVwiOlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiaW1hZ2VzL3RodW5kZXIuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiTWlzdFwiOlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiaW1hZ2VzL21pc3QuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvY2xvdWQtZGF5LmpwZ1wiKSc7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHMoY3VycmVudCkge1xuICBsZXQgdCwgdE1heCwgdE1pbiwgc3BlZWQ7XG5cbiAgLy8gdGVtcCBjb252ZXJzaW9uXG4gIGZUb0MgPSAoZikgPT4gKChmIC0gMzIpIC8gMS44KS50b0ZpeGVkKCk7XG4gIGNUb0YgPSAoYykgPT4gKGMgKiAxLjggKyAzMikudG9GaXhlZCgpO1xuXG4gIC8vIHNwZWVkIGNvbnZlcnNpb25zXG4gIG1ldGVyc1RvTXBoID0gKHMpID0+IChzICogMi4yMzcpLnRvRml4ZWQoMik7XG4gIG1waFRvTWV0ZXJzID0gKHMpID0+IChzIC8gMi4yMzcpLnRvRml4ZWQoMik7XG5cbiAgaWYgKGN1cnJlbnQgPT09IFwiaW1wZXJpYWxcIikge1xuICAgIHQgPSBmVG9DKHRlbXBlcmF0dXJlLnRleHRDb250ZW50KTtcbiAgICB0TWF4ID0gZlRvQyh0ZW1wZXJhdHVyZU1heC50ZXh0Q29udGVudCk7XG4gICAgdE1pbiA9IGZUb0ModGVtcGVyYXR1cmVNaW4udGV4dENvbnRlbnQpO1xuICAgIHNwZWVkID0gbXBoVG9NZXRlcnMod2luZC50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0pICsgXCIgbS9zXCI7XG4gIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJtZXRyaWNcIikge1xuICAgIHQgPSBjVG9GKHRlbXBlcmF0dXJlLnRleHRDb250ZW50KTtcbiAgICB0TWF4ID0gY1RvRih0ZW1wZXJhdHVyZU1heC50ZXh0Q29udGVudCk7XG4gICAgdE1pbiA9IGNUb0YodGVtcGVyYXR1cmVNaW4udGV4dENvbnRlbnQpO1xuICAgIHNwZWVkID0gbWV0ZXJzVG9NcGgod2luZC50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0pICsgXCIgbXBoXCI7XG4gIH1cblxuICAvLyBhZGp1c3QgRE9NXG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gdDtcbiAgdGVtcGVyYXR1cmVNYXgudGV4dENvbnRlbnQgPSB0TWF4O1xuICB0ZW1wZXJhdHVyZU1pbi50ZXh0Q29udGVudCA9IHRNaW47XG4gIHdpbmQudGV4dENvbnRlbnQgPSBzcGVlZDtcbn1cblxuY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGdldFRlbXBEYXRhKCk7XG4gICAgY2l0eUlucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5cbmltcGVyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGltcGVyaWFsLmNsYXNzTmFtZSA9PT0gXCJcIikge1xuICAgIGltcGVyaWFsLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XG4gICAgbWV0cmljLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgY29udmVydFVuaXRzKFwibWV0cmljXCIpO1xuICB9XG59KTtcblxubWV0cmljLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKG1ldHJpYy5jbGFzc05hbWUgPT09IFwiXCIpIHtcbiAgICBpbXBlcmlhbC5jbGFzc05hbWUgPSBcIlwiO1xuICAgIG1ldHJpYy5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICAgIGNvbnZlcnRVbml0cyhcImltcGVyaWFsXCIpO1xuICB9XG59KTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZ2V0VGVtcERhdGEoXCJXYXNoaW5ndG9uIERDXCIpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==