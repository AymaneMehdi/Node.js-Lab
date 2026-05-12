const os = require('os');

const memory = os.totalmem() / 1024 / 1024 / 1024;

console.log(memory.toFixed(2) + ' GB');
// Output: 15.26 GB (the total amount of system memory in gigabytes, rounded to 2 decimal places)