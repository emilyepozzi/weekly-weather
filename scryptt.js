var searchFormEl = document.querySelector("#search-form");
var cityFormEl = document.querySelector(".form-label");
var weatherShowingEl = document.querySelector("#weather-search-container");
var weatherSearchEl = document.querySelector("#weather-search-term");


var formHandler = function(event) {
    event.preventDefault();

    var formLabel = cityFormEl.value.trim();
}