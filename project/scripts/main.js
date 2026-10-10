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

// motorcycles


const motorcycles = [
    {
        name: "YZF-R1",
        brand: "Yamaha",
        category: "Sport",
        description: "A high-performance sport motorcycle designed for track-inspired riding."
    },
    {
        name: "Ninja ZX-6R",
        brand: "Kawasaki",
        category: "Sport",
        description: "A middleweight sport motorcycle built for responsive performance."
    },
    {
        name: "Fat Boy",
        brand: "Harley-Davidson",
        category: "Cruiser",
        description: "A cruiser known for its bold styling and relaxed riding position."
    },
    {
        name: "Africa Twin",
        brand: "Honda",
        category: "Adventure",
        description: "An adventure motorcycle designed for road trips and off-road exploration."
    },
    {
        name: "R 1300 GS",
        brand: "BMW",
        category: "Adventure",
        description: "A versatile adventure motorcycle made for long-distance journeys."
    },
    {
        name: "Street Glide",
        brand: "Harley-Davidson",
        category: "Touring",
        description: "A touring motorcycle designed for comfortable long-distance rides."
    },
    {
        name: "MT-07",
        brand: "Yamaha",
        category: "Naked",
        description: "A lightweight naked motorcycle with an upright riding position."
    },
    {
        name: "Z900",
        brand: "Kawasaki",
        category: "Naked",
        description: "A naked motorcycle combining sporty performance and everyday usability."
    }
];

// home

const featuredContainer = document.querySelector("#featured-motorcycles");

if (featuredContainer) {
    motorcycles.slice(0, 3).forEach(function (motorcycle) {
        const card = `
            <article class="motorcycle-card">
                <h3>${motorcycle.brand} ${motorcycle.name}</h3>
                <p class="motorcycle-category">${motorcycle.category}</p>
                <p>${motorcycle.description}</p>
            </article>
        `;

        featuredContainer.insertAdjacentHTML("beforeend", card);
    });
}

// filter 

const motorcycleContainer = document.querySelector("#motorcycle-container");
const categoryFilter = document.querySelector("#category-filter");

function displayMotorcycles(motorcycleList) {
    if (!motorcycleContainer) return;

    motorcycleContainer.innerHTML = "";

    motorcycleList.forEach(function (motorcycle) {
        const card = `
            <article class="motorcycle-card">
                <h2>${motorcycle.brand} ${motorcycle.name}</h2>
                <p><strong>Category:</strong> ${motorcycle.category}</p>
                <p>${motorcycle.description}</p>
            </article>
        `;

        motorcycleContainer.insertAdjacentHTML("beforeend", card);
    });
}

if (motorcycleContainer) {
    displayMotorcycles(motorcycles);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
        const selectedCategory = categoryFilter.value;

        if (selectedCategory === "All") {
            displayMotorcycles(motorcycles);
        } else {
            const filteredMotorcycles = motorcycles.filter(function (motorcycle) {
                return motorcycle.category === selectedCategory;
            });

            displayMotorcycles(filteredMotorcycles);
        }
    });
}
