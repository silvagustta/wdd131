
"use strict";

// ================================
// 1. MOTORCYCLE CATEGORIES
// ================================

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
];

// Display categories on the home page
const categoryContainer = document.querySelector("#category-container");

if (categoryContainer) {
    categories.forEach(function (category) {
        const card = `
            <article class="category-card">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </article>
        `;

        categoryContainer.insertAdjacentHTML("beforeend", card);
    });
}


// ================================
// 2. MOTORCYCLE DATA
// ================================

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


// ================================
// 3. FEATURED MOTORCYCLES ON HOME
// ================================

const featuredContainer = document.querySelector("#featured-motorcycles");

if (featuredContainer) {
    motorcycles.slice(0, 3).forEach(function (motorcycle) {
        const card = `
            <article class="motorcycle-card">
                <h3>${motorcycle.brand} ${motorcycle.name}</h3>
                <p><strong>Category:</strong> ${motorcycle.category}</p>
                <p>${motorcycle.description}</p>
            </article>
        `;

        featuredContainer.insertAdjacentHTML("beforeend", card);
    });
}


// ================================
// 4. FAVORITES WITH LOCAL STORAGE
// ================================

function getFavorites() {
    try {
        return JSON.parse(
            localStorage.getItem("motorcycleFavorites")
        ) || [];
    } catch (error) {
        return [];
    }
}

function saveFavorite(motorcycleName) {
    const favorites = getFavorites();

    if (favorites.includes(motorcycleName)) {
        const updatedFavorites = favorites.filter(function (name) {
            return name !== motorcycleName;
        });

        localStorage.setItem(
            "motorcycleFavorites",
            JSON.stringify(updatedFavorites)
        );
    } else {
        favorites.push(motorcycleName);

        localStorage.setItem(
            "motorcycleFavorites",
            JSON.stringify(favorites)
        );
    }
}


// ================================
// 5. DISPLAY MOTORCYCLES
// ================================

const motorcycleContainer = document.querySelector("#motorcycle-container");
const categoryFilter = document.querySelector("#category-filter");

function displayMotorcycles(motorcycleList) {
    if (!motorcycleContainer) {
        return;
    }

    motorcycleContainer.innerHTML = "";

    motorcycleList.forEach(function (motorcycle) {
        const favorites = getFavorites();
        const isFavorite = favorites.includes(motorcycle.name);

        const card = `
            <article class="motorcycle-card">
                <h2>${motorcycle.brand} ${motorcycle.name}</h2>
                <p><strong>Category:</strong> ${motorcycle.category}</p>
                <p>${motorcycle.description}</p>

                <button
                    class="favorite-button"
                    data-name="${motorcycle.name}"
                    aria-pressed="${isFavorite}">
                    ${isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </button>
            </article>
        `;

        motorcycleContainer.insertAdjacentHTML("beforeend", card);
    });
}

// Show all motorcycles when the catalog opens
if (motorcycleContainer) {
    displayMotorcycles(motorcycles);
}


// ================================
// 6. FILTER MOTORCYCLES
// ================================

if (categoryFilter) {
    categoryFilter.addEventListener("change", function () {
        const selectedCategory = categoryFilter.value;

        if (selectedCategory === "All") {
            displayMotorcycles(motorcycles);
        } else {
            const filteredMotorcycles = motorcycles.filter(
                function (motorcycle) {
                    return motorcycle.category === selectedCategory;
                }
            );

            displayMotorcycles(filteredMotorcycles);
        }
    });
}


// ================================
// 7. FAVORITE BUTTON EVENTS
// ================================

if (motorcycleContainer) {
    motorcycleContainer.addEventListener("click", function (event) {
        const button = event.target.closest(".favorite-button");

        if (!button || !motorcycleContainer.contains(button)) {
            return;
        }

        const motorcycleName = button.dataset.name;

        saveFavorite(motorcycleName);

        const selectedCategory = categoryFilter
            ? categoryFilter.value
            : "All";

        if (selectedCategory === "All") {
            displayMotorcycles(motorcycles);
        } else {
            const filteredMotorcycles = motorcycles.filter(
                function (motorcycle) {
                    return motorcycle.category === selectedCategory;
                }
            );

            displayMotorcycles(filteredMotorcycles);
        }
    });
}


// ================================
// 8. FOOTER DATE INFORMATION
// ================================

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}
