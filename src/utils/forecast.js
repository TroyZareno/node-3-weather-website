const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7d417c6f6c4bbac645b0671aa8dc3cad&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to conenct to web services", undefined);
    } else if (body.error === 0) {
      callback("unable to find location", undefined);
    } else {
      console.log(body.current);
      callback(
        undefined,
        body.current.weather_descriptions +
          ". It is currently " +
          body.current.temperature +
          " degree out. There is a " +
          body.current.precip +
          " chance of rain. The humidity right now is " +
          body.current.humidity +
          " and the pressure is " +
          body.current.pressure
      );
    }
  });
};

module.exports = forecast;
