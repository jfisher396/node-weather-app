const request = require('request');

const location = (latitude,longitude,callback) => {
  const url =
    process.env.WEATHERSTACK_API_URL + latitude + "," + longitude + "&units=f";

  request({ url: url, json: true }, (err, res) => {
    // console.log(res.body.current)
    if (err) {
      callback("Unable to connect to WeatherStack API.", undefined);
    } else if (res.body.error) {
      callback(
        "No forecast found for that search query.  Please try another.",
        undefined
      );
    } else {
      callback(undefined, `It is currently ${res.body.current.weather_descriptions[0]} with a temperature of ${res.body.current.temperature} degrees. It feels like ${res.body.current.feelslike} degrees out.`);
    }
  });
};

module.exports = location;