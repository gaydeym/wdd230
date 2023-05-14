// Responsive Menu
function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById("hamburger-button");

x.onclick = toggleMenu;


// Current Date
let date = new Date();
let currentDate = date.toLocaleDateString('en-UK', { weekday:"long", day:"numeric", month:"long", year:"numeric"})
document.getElementById("currentDate").textContent = currentDate;


// Current Year
let copyrightYear = date.getFullYear();
document.getElementById("currentYear").textContent = copyrightYear;


// Last Modified
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;


// Ad
let currentDay = date.getDay();

if (currentDate !== 1 || currentDate !== 2) {
    document.querySelector(".ad").style.display = "none";
}