// dates
const currentYear = new Date().getFullYear();

const lastModified = new Date(document.lastModified).toLocaleString('en-US')

document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = 
    document.lastModified;

// weather