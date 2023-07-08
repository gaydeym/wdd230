const url = "https://raw.githubusercontent.com/gaydeym/json-companies-data/771b266845273ab0f0ec2425f2004c8bc736863a/data.json";

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const cards = document.querySelector("div.cards-directory");

    companies.forEach((company) => {
        // Create elements to add to the div.cards-directory element
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let title = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");

        // Build the logo company by setting all the relevant attribute
        logo.setAttribute("src", company.imageurl);
        logo.setAttribute("alt", `Logo of ${company.name}`)
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "267");
        logo.setAttribute("height", "200");

        // Set the content of each created element
        title.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        website.textContent= company.website;
        website.setAttribute("href", company.website);

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(title);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
};

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards-directory");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.remove("grid");
	display.classList.add("list");
});

getCompaniesData();