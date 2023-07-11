const temperature = parseFloat(document.getElementById('current-temp').textContent);
const weather_condition = document.getElementById('weather-condition').textContent;
const wind_speed = parseFloat(document.getElementById('wind-speed').textContent);
const wind_chill = document.getElementById('wind-chill');

if (temperature <= 50 && wind_speed > 3.0) {
    // Formula for calculating wind chill value
    wind_chill.textContent = `${(35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16) + 0.4275 * temperature * Math.pow(wind_speed, 0.16)).toFixed(2)} °F`;
} else {
    wind_chill.textContent = "N/A";
};