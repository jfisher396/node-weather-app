require("dotenv").config();
const request = require('request');

const url = process.env.API_URL + "query=37.8267,-122.4233";

request({ url: url, json: true }, (err, res) => {
    // console.log(res.body.current);
    console.log(`It is currently ${res.body.current.temperature} degrees. It feels like ${res.body.current.feelslike} degrees out.`)
})


