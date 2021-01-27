const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const weatherData = require('../utils/weatherData');
const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public');

const viewsPath = path.join(__dirname, '../templates/views');

const partialPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialPath);
app.use(express.static(publicStaticDirPath));

app.get('', (req,res) => {
    res.render('index', {
        title: "Weather App"
    })
});

app.get('/weather', (req,res) => {
    const address = req.query.address;
    if(!address) {
        return res.send({
            error: "You must enter an address."
        })
    }
    weatherData(address, (error, {temperature, description, cityName, weatherIcon}) => {
        if(error) {
            return res.send({
                error: "Please Enter a valid address."
            })
        }
        console.log(temperature, description, cityName, weatherIcon);
        return res.send({
            temperature,
            description,
            cityName,
            weatherIcon
        })
    })
});

app.get("*", (req,res) => {
    res.render('404', {
        title: "Page not found."
    })
});

app.listen(port, () => {
    console.log('Server is up and running on port: ', port);
});