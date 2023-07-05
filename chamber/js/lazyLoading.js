// Lazy loading
const loadImages = () => {
    const images = document.querySelectorAll("img[data-src]");
  
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.setAttribute("src", image.getAttribute("data-src"));
            image.removeAttribute("data-src");
            observer.unobserve(image);
          }
        });
      });
  
      images.forEach((image) => {
        observer.observe(image);
      });
    } else {
      images.forEach((image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.removeAttribute("data-src");
      });
    }
  };
  
  window.addEventListener("load", loadImages);


// Last visit
const lastVisitDate = localStorage.getItem('lastVisitDate'); 
let daysPassed;
  
if (lastVisitDate) {  
    const timeSinceLastVisit = new Date().getTime() - new Date(lastVisitDate).getTime();
    daysPassed = Math.floor(timeSinceLastVisit / (1000 * 60 * 60 * 24));
} else {
    daysPassed = 'This is your first visit';
}

document.getElementById("visits").textContent = daysPassed;
localStorage.setItem("lastVisitDate", new Date().toISOString());