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
module.exports = { fetchMyIP };