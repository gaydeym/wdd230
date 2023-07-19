let date = new Date();

// Current Year
let copyrightYear = date.getFullYear();
document.getElementById("currentYear").textContent = copyrightYear;


// Last Modified
let lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;