let button = document.getElementById("searchBtn");

button.addEventListener("click", function(){

let city = document.getElementById("cityInput").value.trim();

let loading = document.getElementById("loading");
let error = document.getElementById("error");
let result = document.getElementById("weatherResult");

loading.innerText = "Loading weather data...";
error.innerText = "";
result.innerHTML = "";

let apiKey = "3a991d55de1d57cb8cc43dca06333ce2";

let url = "https://api.openweathermap.org/data/2.5/weather?q="
+ city +
"&units=metric&appid=" +
apiKey;

fetch(url)

.then(function(response){

if(!response.ok){
throw new Error("City not found");
}

return response.json();

})

.then(function(data){

loading.innerText = "";

result.innerHTML =
"<p>City: " + data.name + "</p>" +
"<p>Temperature: " + data.main.temp + " °C</p>" +
"<p>Weather: " + data.weather[0].description + "</p>" +
"<p>Humidity: " + data.main.humidity + "%</p>";

})

.catch(function(){

loading.innerText = "";
error.innerText = "Error: Unable to fetch weather data";

});

});
