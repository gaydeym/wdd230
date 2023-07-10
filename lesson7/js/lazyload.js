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