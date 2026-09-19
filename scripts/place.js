// dates
const currentYear = new Date().getFullYear();

const lastModified = new Date(document.lastModified).toLocaleString('en-US')

document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = 
    document.lastModified;

// weather
const temperature = document.getElementById("temperature");
const windSpeed = document.getElementById("wind-speed");
const windChillElement = document.getElementById("wind-chill");
const temp = 5;
const speed = 10;
const windChill = calculateWindChill(temp, speed);

temperature.textContent = temp;
windSpeed.textContent = speed;
windChillElement.textContent = windChill

function calculateWindChill(temp, speed){
    if(temp <= 10 && speed > 4.8){
        const windFactor = Math.pow(speed, 0.16);
        const tempFactor = 0.6215 * temp;
        const windEffect = 11.37 * windFactor;
        const tempWindEffect = 0.3965 * temp * windFactor;

        const windChill = 13.12 +tempFactor - windEffect + tempWindEffect;

        return windChill.toFixed(1);
    }
    else {
        return "N/A"
    }
}