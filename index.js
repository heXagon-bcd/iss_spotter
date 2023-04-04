// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(('173.35.234.233'), (error, coordinates) => {
//   if (error) {
//     console.log("it didnt work", error);
//     return;
//   }
//   console.log("it worked!", coordinates);
// });


fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error, flyovertimes) => {
  if (error) {
    console.log("it didnt work", error);
    return;
  }
  console.log("it worked flying over:", flyovertimes);
});