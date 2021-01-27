const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public')


app.use(express.static(publicStaticDirPath));

app.get('', (req,res) => {
    res.send("Hello world, weather app");
});

app.get('/weather', (req,res) => {
    res.send("Weather endpoint");
});

app.get("*", (req,res) => {
    res.send("Error 404: Page Not Found.")
});

app.listen(port, () => {
    console.log('Server is up and running on port: ', port);
});