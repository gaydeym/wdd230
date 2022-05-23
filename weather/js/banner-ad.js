//BANNER AD
function bannerAd() {
    document.querySelector(".banner-ad").style.display = "none";
}

if (weekday !== "Friday") {
    bannerAd();
}