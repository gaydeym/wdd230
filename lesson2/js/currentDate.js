let currentDate = new Date().toLocaleDateString('en-UK', { weekday:"long", day:"numeric", month:"long", year:"numeric"})
document.getElementById("currentDate").textContent = currentDate;

