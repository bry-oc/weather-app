var fetchWeather = "/weather"

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('.weatherCondition');
const tempElement = document.querySelector('.temperature span');
const locationElement = document.querySelector('.place');
const dateElement = document.querySelector('.date')
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

dateElement.textContent =  monthNames[new Date().getMonth()].substring(0,3) + ' ' + new Date().getDate();

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";
    const locationAPI = fetchWeather + "?address=" + search.value;
    fetch(locationAPI).then(response => {
        response.json().then(data => {
            if(data.error){
                locationElement.textContent = data.error;
                tempElement.textContent = "";
                weatherCondition.textContent = "";
            } else {
                locationElement.textContent = data.cityName;
                tempElement.textContent = (((data.temperature-273.15)*1.8)+32).toFixed(0) +'\u00B0F / ' + (data.temperature-273.15).toFixed(0) +'\u00B0C';
                weatherCondition.textContent = data.description;
            }
        });
    });
})