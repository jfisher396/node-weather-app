require("dotenv").config();
const request = require('request');

const weatherstackUrl = process.env.WEATHERSTACK_API_URL + "query=Seattle&units=f";
const mapboxUrl = process.env.MAPBOX_API_URL;


request({ url: weatherstackUrl, json: true }, (err, res) => {
    // console.log(res.body.current);
    console.log(`It is currently ${res.body.current.weather_descriptions[0]} with a temperature of ${res.body.current.temperature} degrees. It feels like ${res.body.current.feelslike} degrees out.`)
})

request({ url: mapboxUrl, json: true }, (err, res) => {
    const latitude = res.body.features[0].center[1];
    const longitude = res.body.features[0].center[0];
    console.log(`The longitude is ${longitude} and the latitude is ${latitude}`);
})
