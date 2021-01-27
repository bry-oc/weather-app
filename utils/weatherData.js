const request = require('request');
const constants = require('..//config');

const weatherData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY;
    request({url, json:true}, (error, {body}) => {
        console.log(body);
        if(error) {
            callback("Can't fetch data from openweathermap api ", undefined)
        } else {
            if(body.cod == 404){
                callback(undefined, {
                    temperature: "NaN",
                    description: "Please enter a valid location.",
                    cityName: ""
                })
            } else {
                callback(undefined, {
                    temperature: body.main.temp,
                    description: body.weather[0].description,
                    cityName: body.name,
                    weatherIcon: body.weather[0].icon
                })
            }
        }
    });
}

module.exports = weatherData;