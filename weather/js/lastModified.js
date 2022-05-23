//DATE
let currentDate = new Date();

let weekday = currentDate.toLocaleDateString("en", {weekday: "long"});
let day = currentDate.getDate();
let month = currentDate.toLocaleDateString("en", {month: "long"});
let year = currentDate.getFullYear();

currentDate = `${weekday}, ${day} ${month} ${year}`;
document.querySelector("#current-date").textContent = currentDate;