// Wait for the DOM to be fully loaded before executing any JavaScript

document.addEventListener("DOMContentLoaded", function () {

    const apiKey = "43b296f553a355f680eceeff3a42c5f4"
    const searchForm = document.querySelector("#search-form")

    //city input query value //
    const cityInputField = document.querySelector("#city-input")
    
    // Fetch data //
    function fetchWeather() {
        const weatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityInputField.value}&appid=${apiKey}`
        
        fetch(weatherUrl).then(function (response) {
            if(response.ok) {
                response.json().then(function(data) {
                    console.log(data);
                    for(let i = 0; i < data.list.length; i++) {
                    

    // Display current weather conditions for the city with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the the wind speed
    // Display future weather conditions for the city with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
    
                    let tempElement = document.createElement("p")
                    tempElement.textContent = data.list[i].main.temp +"°F" 
                    document.querySelector(".current-container").append(tempElement)
                    }
                })
            }
        })
    }

    
        // add event listener for search //
        // On click, the city is added to the search history
        searchForm.addEventListener("click", fetchWeather);


    // WHEN I click on a city in the search history
    // THEN I am again presented with current and future conditions for that city


});

