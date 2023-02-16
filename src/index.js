const weatherForm = document.querySelector("#weatherForm");
const searchInput = document.querySelector("#searchInput");
const divLeft = document.querySelector("#left");
const divCenter = document.querySelector("#center");
const divRight = document.querySelector("#right");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const name = document.createElement("h4");
const currDay = document.createElement("span");
const dayTwo = document.createElement("span");
const dayThree = document.createElement("span");
const dayFour = document.createElement("span");
const dayFive = document.createElement("span");
const currentWeather = document.createElement("h1");

// Retrieves weather information
document.addEventListener("DOMContentLoaded", () => {
  function fetchWeather(name) {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        name +
        "&appid=4978172757e9321d84d11fb75e6b3377&units=imperial"
    )
      .then((resp) => resp.json())
      .then((forcastData) => {
        console.log(forcastData);
        renderForcast(forcastData.list);
        renderCurrentWeather(forcastData.list);
      });
  }
  // Search by city
  weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    name.innerHTML = "";
    currDay.innerHTML = "";
    dayTwo.innerHTML = "";
    dayThree.innerHTML = "";
    dayFour.innerHTML = "";
    dayFive.innerHTML = "";
    currentWeather.innerHTML = "";

    const cityValues = e.target.search.value;
    console.log(cityValues);
    renderCurrentCityName(cityValues);
    fetchWeather(cityValues);
  });
});
// Toggle search input on "toggle"
weatherForm.addEventListener("click", addFunction);
function addFunction() {
  searchInput.classList.add("show");
}
document.querySelector(".main").addEventListener("click", removeFunction);
function removeFunction() {
  searchInput.classList.remove("show");
}
// Render forcast
renderForcast = (weather) => {
  currDay.textContent = Math.round(weather[0].main.temp) + "\u00B0";
  dayTwo.textContent = Math.round(weather[8].main.temp) + "\u00B0";
  dayThree.textContent = Math.round(weather[16].main.temp) + "\u00B0";
  dayFour.textContent = Math.round(weather[24].main.temp) + "\u00B0";
  dayFive.textContent = Math.round(weather[32].main.temp) + "\u00B0";

  div1.appendChild(currDay);
  div2.appendChild(dayTwo);
  div3.appendChild(dayThree);
  div4.appendChild(dayFour);
  div5.appendChild(dayFive);
};

//Render main
renderMainScreen = () => {
  //Render current weather
  renderCurrentWeather = (weather) => {
    const CurrentWeatherIcon = document.createElement("img");

    currentWeather.textContent = Math.round(weather[0].main.temp) + "\u00B0";
    currentWeather.style.fontSize = "90px";
    currentWeather.style.fontWeight = "300";
    CurrentWeatherIcon.textContent = weather.icon;

    divLeft.appendChild(currentWeather);
    divLeft.appendChild(CurrentWeatherIcon);
  };

  //Render current city name
  renderCurrentCityName = (city) => {
    name.textContent = city;
    name.classList.add("capitalize");
    divCenter.appendChild(name);
  };
};
renderMainScreen();
