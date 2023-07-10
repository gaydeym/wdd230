const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards"); // select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let portrait = document.createElement("img");
        let birth = document.createElement("p");
        let place = document.createElement("p");
        let children = document.createElement("p");
        let years = document.createElement("p");
        let death = document.createElement("p");
        let age = document.createElement("p");

        // Build the h2 content out to show the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute("src", prophet.imageurl);
        switch (prophet.order) {
            case 1:
                portrait.setAttribute(
                    "alt",
                    `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}st Latter-day President`
                );
                break;
            case 2:
                portrait.setAttribute(
                    "alt",
                    `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}nd Latter-day President`
                );
                break;
            case 3:
                portrait.setAttribute(
                    "alt",
                    `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}rd Latter-day President`
                );
                break;
            default:
                portrait.setAttribute(
                    "alt",
                    `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`
                );
                break;
        }
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        birth.textContent = `Birth: ${prophet.birthdate}`;
        place.textContent = `Place: ${prophet.birthplace}`;
        children.textContent = `Children: ${prophet.numofchildren}`;
        years.textContent = `Years: ${prophet.length}`;
        if (prophet.death == null) {
            death.textContent = `Death: Still lives!`;
            let today = new Date();
            age.textContent = `Age: ${moment(today, "D MMMM YYYY").diff(prophet.birthdate, 'years')}`;
        } else {
            death.textContent = `Death: ${prophet.death}`;
            age.textContent = `Age: ${moment(prophet.death, "D MMMM YYYY").diff(prophet.birthdate, 'years')}`;
        }

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
        card.appendChild(birth);
        card.appendChild(place);
        card.appendChild(children);
        card.appendChild(years);
        card.appendChild(death);
        card.appendChild(age);

        cards.appendChild(card);
    });
};

getProphetData();