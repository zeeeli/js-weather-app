/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMUpdate": () => (/* binding */ DOMUpdate),
/* harmony export */   "convertUnits": () => (/* binding */ convertUnits)
/* harmony export */ });
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");


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
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.DOMUpdate)(weatherData, activeUnit.id);
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
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.convertUnits)("metric");
  }
});

metric.addEventListener("click", (event) => {
  if (metric.className === "") {
    imperial.className = "";
    metric.className = "active";
    (0,_DOM__WEBPACK_IMPORTED_MODULE_0__.convertUnits)("imperial");
  }
});

window.onload = () => {
  getTempData("Washington DC");
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQjtBQUMzRSxnREFBZ0QsaUJBQWlCO0FBQ2pFLDhDQUE4QyxpQkFBaUI7QUFDL0QsNEJBQTRCLG9CQUFvQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUM7Ozs7Ozs7VUMxR25DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsU0FBUyxnREFBZ0QsY0FBYztBQUNsSTtBQUNBO0FBQ0EsSUFBSSwrQ0FBUztBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBWTtBQUNoQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFZO0FBQ2hCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy13ZWF0aGVyLWFwcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vanMtd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vanMtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pzLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vanMtd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qcy13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgxXCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgzXCIpO1xuY29uc3QgdGVtcGVyYXR1cmVNYXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhpZ2hcIik7XG5jb25zdCB0ZW1wZXJhdHVyZU1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG93XCIpO1xuY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1pbWFnZVwiKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRcIik7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG5jb25zdCBkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItZGVzXCIpO1xuXG5mdW5jdGlvbiBET01VcGRhdGUoZGF0YSwgdW5pdCkge1xuICAvLyB1cGRhdGUgRE9NIGVsZW1lbnRzIHRvIG1hdGNoIGFwaSBkYXRhXG4gIGNvdW50cnkudGV4dENvbnRlbnQgPSBkYXRhLnN5cy5jb3VudHJ5O1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGRhdGEubWFpbi50ZW1wLnRvRml4ZWQoKTtcbiAgdGVtcGVyYXR1cmVNYXgudGV4dENvbnRlbnQgPSBkYXRhLm1haW4udGVtcF9tYXgudG9GaXhlZCgpO1xuICB0ZW1wZXJhdHVyZU1pbi50ZXh0Q29udGVudCA9IGRhdGEubWFpbi50ZW1wX21pbi50b0ZpeGVkKCk7XG4gIGRlcy50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgZGVzLnRleHRDb250ZW50ID0gZGVzLnRleHRDb250ZW50IC8vIGNhcGl0YWxpemUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZCBpbiBkZXNjcmlwdGlvblxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnNwbGl0KFwiIFwiKVxuICAgIC5tYXAoKHMpID0+IHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKSlcbiAgICAuam9pbihcIiBcIik7XG4gIHdlYXRoZXJJbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3cvJHtkYXRhLndlYXRoZXJbMF0uaWNvbn0ucG5nYDtcbiAgaWYgKHVuaXQgPT0gXCJpbXBlcmlhbFwiKSB3aW5kLnRleHRDb250ZW50ID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtcGhgO1xuICBpZiAodW5pdCA9PSBcIm1ldHJpY1wiKSB3aW5kLnRleHRDb250ZW50ID0gYCR7ZGF0YS53aW5kLnNwZWVkfSBtL3NgO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0gJWA7XG5cbiAgLy8gY2hlY2sgaWYgdGhlIHN1biBpcyB1cFxuICBsZXQgc3VuVXAgPVxuICAgIGRhdGEud2VhdGhlclswXS5pY29uLmNoYXJBdChkYXRhLndlYXRoZXJbMF0uaWNvbi5sZW5ndGggLSAxKSA9PT0gXCJkXCJcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBmYWxzZTtcblxuICAvLyBjaG9vc2UgYmFja2dyb3VuZCBpbWFnZSB1c2luZyBkYXRhXG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiQ2xlYXJcIiAmJiBzdW5VcDpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltYWdlcy9jbGVhci1kYXkuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiQ2xlYXJcIiAmJiAhc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvY2xlYXItbmlnaHQuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiQ2xvdWRzXCIgJiYgc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvY2xvdWQtZGF5LmpwZ1wiKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRhdGEud2VhdGhlclswXS5tYWluID09PSBcIkNsb3Vkc1wiICYmICFzdW5VcDpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltYWdlcy9jbG91ZC1uaWdodC5qcGdcIiknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkYXRhLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJEcml6emxlXCIgJiYgc3VuVXA6XG4gICAgY2FzZSBkYXRhLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJSYWluXCIgJiYgc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvcmFpbi1kYXkuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiRHJpenpsZVwiICYmICFzdW5VcDpcbiAgICBjYXNlIGRhdGEud2VhdGhlclswXS5tYWluID09PSBcIlJhaW5cIiAmJiAhc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvcmFpbi1uaWdodC5qcGdcIiknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkYXRhLndlYXRoZXJbMF0ubWFpbiA9PT0gXCJTbm93XCIgJiYgc3VuVXA6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvc25vdy1kYXkuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiU25vd1wiICYmICFzdW5VcDpcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcImltYWdlcy9zbm93LW5pZ2h0LmpwZ1wiKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRhdGEud2VhdGhlclswXS5tYWluID09PSBcIlRodW5kZXJzdG9ybVwiOlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiaW1hZ2VzL3RodW5kZXIuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGF0YS53ZWF0aGVyWzBdLm1haW4gPT09IFwiTWlzdFwiOlxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiaW1hZ2VzL21pc3QuanBnXCIpJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoXCJpbWFnZXMvY2xvdWQtZGF5LmpwZ1wiKSc7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIC8vIHJlcGxhY2UgbG9hZGluZyBhbmltYXRpb24gd2l0aCBjaXR5IG5hbWUgbGFzdFxuICBjaXR5LnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VW5pdHMoY3VycmVudCkge1xuICBsZXQgdCwgdE1heCwgdE1pbiwgc3BlZWQ7XG5cbiAgLy8gdGVtcCBjb252ZXJzaW9uXG4gIGNvbnN0IGZUb0MgPSAoZikgPT4gKChmIC0gMzIpIC8gMS44KS50b0ZpeGVkKCk7XG4gIGNvbnN0IGNUb0YgPSAoYykgPT4gKGMgKiAxLjggKyAzMikudG9GaXhlZCgpO1xuXG4gIC8vIHNwZWVkIGNvbnZlcnNpb25zXG4gIGNvbnN0IG1ldGVyc1RvTXBoID0gKHMpID0+IChzICogMi4yMzcpLnRvRml4ZWQoMik7XG4gIGNvbnN0IG1waFRvTWV0ZXJzID0gKHMpID0+IChzIC8gMi4yMzcpLnRvRml4ZWQoMik7XG5cbiAgaWYgKGN1cnJlbnQgPT09IFwiaW1wZXJpYWxcIikge1xuICAgIHQgPSBmVG9DKHRlbXBlcmF0dXJlLnRleHRDb250ZW50KTtcbiAgICB0TWF4ID0gZlRvQyh0ZW1wZXJhdHVyZU1heC50ZXh0Q29udGVudCk7XG4gICAgdE1pbiA9IGZUb0ModGVtcGVyYXR1cmVNaW4udGV4dENvbnRlbnQpO1xuICAgIHNwZWVkID0gbXBoVG9NZXRlcnMod2luZC50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0pICsgXCIgbS9zXCI7XG4gIH0gZWxzZSBpZiAoY3VycmVudCA9PT0gXCJtZXRyaWNcIikge1xuICAgIHQgPSBjVG9GKHRlbXBlcmF0dXJlLnRleHRDb250ZW50KTtcbiAgICB0TWF4ID0gY1RvRih0ZW1wZXJhdHVyZU1heC50ZXh0Q29udGVudCk7XG4gICAgdE1pbiA9IGNUb0YodGVtcGVyYXR1cmVNaW4udGV4dENvbnRlbnQpO1xuICAgIHNwZWVkID0gbWV0ZXJzVG9NcGgod2luZC50ZXh0Q29udGVudC5zcGxpdChcIiBcIilbMF0pICsgXCIgbXBoXCI7XG4gIH1cblxuICAvLyBhZGp1c3QgRE9NXG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gdDtcbiAgdGVtcGVyYXR1cmVNYXgudGV4dENvbnRlbnQgPSB0TWF4O1xuICB0ZW1wZXJhdHVyZU1pbi50ZXh0Q29udGVudCA9IHRNaW47XG4gIHdpbmQudGV4dENvbnRlbnQgPSBzcGVlZDtcbn1cblxuZXhwb3J0IHsgRE9NVXBkYXRlLCBjb252ZXJ0VW5pdHMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRE9NVXBkYXRlLCBjb252ZXJ0VW5pdHMgfSBmcm9tIFwiLi9ET01cIjtcblxuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKTtcbmNvbnN0IGltcGVyaWFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBlcmlhbFwiKTtcbmNvbnN0IG1ldHJpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0cmljXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRUZW1wRGF0YShjaXR5TmFtZSA9IGNpdHlJbnB1dC52YWx1ZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGFjdGl2ZVVuaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICBjaXR5LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibGRzLXJpcHBsZVwiPjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48L2Rpdj5gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD05ZjY5ZjdiYjExNjdjZDdjOTVkNjhjY2IwYzFkNmVlNyZ1bml0cz0ke2FjdGl2ZVVuaXQuaWR9YFxuICAgICk7XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgRE9NVXBkYXRlKHdlYXRoZXJEYXRhLCBhY3RpdmVVbml0LmlkKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChcbiAgICAgIFwiRXJyb3IhIFBsZWFzZSBmb2xsb3cgdGhlIGZvbGxvd2luZyBzeW50YXg6IFxcblxcbiBXYXNoaW5ndG9uIERDLCBVUyBcXG4gUGFyaXMsIEZSIFxcblxcbiBEbyBub3QgdXNlIHBlcmlvZHMgb3Igc3RhdGUvcHJvdmluY2UgY29kZXNcIlxuICAgICk7XG4gIH1cbn1cblxuY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGV2ZW50LnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xuICAgIGdldFRlbXBEYXRhKCk7XG4gICAgY2l0eUlucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxufSk7XG5cbmltcGVyaWFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGltcGVyaWFsLmNsYXNzTmFtZSA9PT0gXCJcIikge1xuICAgIGltcGVyaWFsLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XG4gICAgbWV0cmljLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgY29udmVydFVuaXRzKFwibWV0cmljXCIpO1xuICB9XG59KTtcblxubWV0cmljLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKG1ldHJpYy5jbGFzc05hbWUgPT09IFwiXCIpIHtcbiAgICBpbXBlcmlhbC5jbGFzc05hbWUgPSBcIlwiO1xuICAgIG1ldHJpYy5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xuICAgIGNvbnZlcnRVbml0cyhcImltcGVyaWFsXCIpO1xuICB9XG59KTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgZ2V0VGVtcERhdGEoXCJXYXNoaW5ndG9uIERDXCIpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==