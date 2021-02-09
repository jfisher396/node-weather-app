require("dotenv").config();
const request = require('request');
const geocode = require('./utils/geocode');

// const weatherstackUrl = process.env.WEATHERSTACK_API_URL + "query=Seattle&units=f";

// const mapboxUrl = process.env.MAPBOX_API_URL;


// request({ url: weatherstackUrl, json: true }, (err, res) => {
//     if (err) {
//         console.log('Unable to connect to WeatherStack API')
//     } else if (res.body.error) {
//         console.log(res.body.error)
//     } else {
//         console.log(`It is currently ${res.body.current.weather_descriptions[0]} with a temperature of ${res.body.current.temperature} degrees. It feels like ${res.body.current.feelslike} degrees out.`)
//     }
    
// })

// request({ url: mapboxUrl, json: true }, (err, res) => {
    
//     if (err) {
//         console.log('Unable to connect to MapBox API')
//     } else if (res.body.features.length === 0) {
//         console.log('No coordinates found for that search query.  Please try another.')
//     } else {
//         const latitude = res.body.features[0].center[1];
//         const longitude = res.body.features[0].center[0];
//         console.log(`The longitude is ${longitude} and the latitude is ${latitude}`);
//     }
    
// })

geocode("Green Bay", (err, data) => {
    console.log("Error", err);
    console.log("Data", data)
})