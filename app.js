require("dotenv").config();
const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// geocode function requires 2 arguments: a city name and a function
geocode("Berlin", (err, data) => {
  console.log("Error", err);
  console.log("Data", data);
  // location function requires 3 arguments: latitude, longitude and a function
  forecast(40.7831, -73.9712, (err, data) => {
    console.log("Error", err);
    console.log("Data", data);
  });
});
