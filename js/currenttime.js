// MM/DD/YYYY HH:MM:SS
const options = {month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric"};
document.getElementById("currenttime").textContent = new Date().toLocaleDateString("en-US", options);