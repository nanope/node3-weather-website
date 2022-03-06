const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=a810beabfaf938a4c80a8c6aa02d8a20&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Could not access the weather service", undefined);
    } else if (body.error) {
      callback("could not find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}, it is currently ${body.current.temperature} degrees, it feels like ${body.current.feelslike} degrees`
      );
    }
  });
};

module.exports = forecast;
