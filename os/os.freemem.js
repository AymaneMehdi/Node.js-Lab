const os = require('os');

const free = os.freemem() / 1024 / 1024 / 1024;

console.log(free.toFixed(2) + ' GB free');
// Output: 8.12 GB (the amount of free system memory in gigabytes, rounded to 2 decimal places)