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
    console.log(search.value);
    locationElement.textContent = "Loading...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";
    const locationAPI = fetchWeather + "?address=" + search.value;
    fetch(locationAPI).then(response => {
        console.log(response)
    });
})