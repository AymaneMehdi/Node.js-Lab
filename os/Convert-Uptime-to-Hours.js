const os = require('os');

const hours = os.uptime() / 60 / 60;

console.log(hours.toFixed(2) + ' hours');
// Output: '19.48 hours' (the system uptime in hours of the current platform, rounded to 2 decimal places)