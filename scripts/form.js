const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time Circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low Voltage Reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp Equalizer",
        averagerating: 5.0
    }
];


// Product list
const productSelect = document.querySelector("#product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });
}


// Footer year
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector("#currentyear");

if (yearElement) {
    yearElement.textContent = currentYear;
}


// Last modified
const modifiedElement = document.querySelector("#lastModified");

if (modifiedElement) {
    modifiedElement.textContent = document.lastModified;
}


// Review counter
const reviewCountElement = document.querySelector("#reviewCount");

if (reviewCountElement) {

    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    reviewCountElement.textContent = reviewCount;
}