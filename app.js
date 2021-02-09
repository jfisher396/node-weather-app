require("dotenv").config();
const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const city = process.argv[2];

// geocode function requires 2 arguments: a city name and a callback function
geocode(city, (err, geocodeData) => {
  if (err) {
    return console.log(err);
  }

  // forecast function requires 3 arguments: latitude, longitude and a callback function
  forecast(geocodeData.latitude, geocodeData.longitude, (err, forecastData) => {
    if (err) {
      return console.log(err);
    }

    console.log(geocodeData.location);
    console.log(forecastData)
  });
});
