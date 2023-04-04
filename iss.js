/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, _, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const IP = data.ip;
    if (data.length === 0) {
      callback("no ip here". null);
      return;
    } else {
      callback(null, IP);
    }
  });
};

const fetchCoordsByIP = function(IP, callback) {
  request(`http://ipwho.is/${IP}`, (error, __, body) => {
    if (error) {
      callback("ip is not correct", null);
      return;
    }
    const data = JSON.parse(body);
    const { latitude, longitude } = data;
    if (data.length === 0) {
      callback(error, null);
    } else {
      callback(null, { latitude, longitude });
    }
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */

const fetchISSFlyOverTimes = function(coords, callback) {
  request(`https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      console.log(error);
      return;
    }
    if (response.statusCode !== 200) {
      callback("Status code is not 200", null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data.response);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes};