// Categories
const categories = [
    {
        name: "Sport",
        description: "Motorcycles designed for performance."
    },
    {
        name: "Cruiser",
        description: "Motorcycles known for classic styling and relaxed riding positions."
    },
    {
        name: "Adventure",
        description: "Versatile motorcycles designed for long trips and different types of terrain."
    },
    {
        name: "Touring",
        description: "Motorcycles built for long-distance travel and comfort."
    },
    {
        name: "Naked",
        description: "Motorcycles with an exposed design and an upright riding position."
    }
]

// Container
const categoryContainer = document.querySelector("#category-container");

// Card
categories.forEach(function (category) {
    const card = `
        <article>
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        </article>
    `;
    // page
    categoryContainer.insertAdjacentHTML("beforeend", card);
});


