const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=-34.7609&lon=-58.4063&units=imperial&appid=bf5292bf7f04806d4f8e644e2e480fbf";

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCondition = document.querySelector("#weather-condition");
const windSpeed = document.querySelector("#wind-speed");

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}°F`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    weatherCondition.textContent = desc;
    windSpeed.textContent = `${weatherData.wind.speed}  mph`;
}

apiFetch();
