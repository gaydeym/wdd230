const url = "https://raw.githubusercontent.com/gaydeym/json-companies-data/771b266845273ab0f0ec2425f2004c8bc736863a/data.json";

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlights(data.companies);
}

const displaySpotlights = (companies) => {
    const spotlights = document.querySelectorAll(".spotlight > div");
    const filteredCompanies = companies.filter((company) => company.level === "gold" || company.level === "silver");
    const shuffledCompanies = shuffleArray(filteredCompanies).slice(0, 3);

    shuffledCompanies.forEach((company, index) => {
        let spotlight = spotlights[index];
        let logo = spotlight.querySelector("img");
        let name = spotlight.querySelector("h2");
        let address = spotlight.querySelector("p");
        let website = spotlight.querySelector(".blue-button");

        logo.setAttribute("src", company.imageurl);
        logo.setAttribute("alt", `Logo of ${company.name}`)
        name.textContent = company.name;
        address.textContent = company.address;
        website.setAttribute("href", company.website);
    });
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

getCompaniesData();