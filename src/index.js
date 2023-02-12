const weatherForm = document.querySelector("#weatherForm");
const searchInput = document.querySelector("#searchInput");
const apiUrl =
  "http://api.openweathermap.org/data/2.5/forecast?q=irvine&appid=4978172757e9321d84d11fb75e6b3377";

// Retrieves weather information
document.addEventListener("DOMContentLoaded", () => {
  fetch(apiUrl)
    .then((resp) => resp.json())
    .then((forcastData) => console.log(forcastData));
});
// Search by city
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cityValues = {
    name: e.target.search.value,
  };
  console.log(cityValues);
  // renderForcast(cityValues);
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
