require("dotenv").config();
const request = require('request');

const url = process.env.API_URL + "query=Seattle&units=f";

request({ url: url, json: true }, (err, res) => {
    // console.log(res.body.current);
    console.log(`It is currently ${res.body.current.weather_descriptions[0]} with a temperature of ${res.body.current.temperature} degrees. It feels like ${res.body.current.feelslike} degrees out.`)
})


