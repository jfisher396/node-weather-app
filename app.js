require("dotenv").config();
const request = require('request');


const url = process.env.API_URL;

request({ url: url }, (err, res) => {
    const data = JSON.parse(res.body);
    console.log(data.current)
})