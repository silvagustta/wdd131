const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function () {
    nav.classList.toggle("open");
    });

// temples array
const temples = [
  {
    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Ceará",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
    "https://newsroom.churchofjesuschrist.org/media/960x540/20190319_112115_MReier_FT_EXT_MTR8964.jpg"
  },
  {
    templeName: "Dallas Texas",
    location: "Dallas, Texas, United States",
    dedicated: "1984, October, 19-24",
    area: 44207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-67245.jpg"
  },
  {
    templeName: "Orlando Florida",
    location: "Orlando, Florida, United States",
    dedicated: "1994, October, 9-11",
    area: 70000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-67126.jpg"
  },
  {
    templeName: "Atlanta Georgia",
    location: "Atlanta, Georgia, United States",
    dedicated: "1983, June, 1-4",
    area: 34500,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-3860.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3548.jpg"
  },
  {
    templeName: "Stockholm Sweden",
    location: "Jordbro, Sweden",
    dedicated: "1985, July, 2-4",
    area: 31000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19-21",
    area: 45800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/madrid-spain-temple/madrid-spain-temple-68481.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27-29",
    area: 53997,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, South Korea",
    dedicated: "1985, December, 14-15",
    area: 28057,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305.jpg"
  },
];

// display temples
const displayTemples = (temples) => {
    const container = document.querySelector(".temples");

    container.innerHTML = "";

    temples.forEach((temple) => {
        const card = document.createElement("figure");

        card.innerHTML = `
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName} Temple"
                 loading="lazy">

            <figcaption>
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        container.appendChild(card);
    });
};

// Display all temples when page loads
displayTemples(temples);

// Filters
const homeLink = document.querySelector('a[href="#home"]');
const oldLink = document.querySelector('a[href="#old"]');
const newLink = document.querySelector('a[href="#new"]');
const largeLink = document.querySelector('a[href="#large"]');
const smallLink = document.querySelector('a[href="#small"]');

homeLink.addEventListener("click", () => {
    displayTemples(temples);
});

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter(temple => {
        return parseInt(temple.dedicated) < 1900;
    });

    displayTemples(oldTemples);
});

newLink.addEventListener("click", () => {
    const newTemples = temples.filter(temple => {
        return parseInt(temple.dedicated) > 2000;
    });

    displayTemples(newTemples);
});

largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter(temple => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});

smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter(temple => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});