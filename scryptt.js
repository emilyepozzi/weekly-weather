//when user searches for a city show current and future conditions
// add city to search history

// when showing current conditions you will have x values here
// when showing uv index yu will show with a color
// when showing future conditions you will have said values
// when I click on search history city I will see that cities info

var searchFormEl = document.querySelector("#search-form");
var cityFormEl = document.querySelector(".form-label");
var weatherShowingEl = document.querySelector("#weather-search-container");
var weatherSearchEl = document.querySelector("#weather-search-term");

var weatherIcons = 
// click event for button
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    console.log("submit");

    
    var documentEl = document.getElementById("city").value;

    getWeatherRepo(documentEl);
});  

// clicking search button
var formHandler = function(event) {
    //doesnt allow the page to refresh
    event.preventDefault();

    // value from the input
    var formLabel = cityFormEl.value.trim();
};

// getting our information from the weather app
function getWeatherRepo(city) {
    //put together the api url

    var apiUrl = "http:/api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=90fbb6d7c2d776e22c78997182a9eb58";

    //fetch or get the url
    fetch (apiUrl)
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    });

 };




