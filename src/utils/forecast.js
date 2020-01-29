const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/a074c39a398c7f8407d71a18ee8cf399/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to location services", undefined);
    } else if (body.error) {
      console.log("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          "It is currently " +
          body.currently.temperature +
          " degrees out. There is a " +
          body.currently.precipProbability +
          "% chance of rain"
      );
    }
  });
};

module.exports = forecast;
