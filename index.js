const { nextISSTimesForMyLocation, printPassTimes } = require('./iss');

nextISSTimesForMyLocation((error, flyOverTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(flyOverTimes);
});
