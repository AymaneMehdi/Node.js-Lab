const fs = require('fs');

console.log(fs.existsSync('test.txt'));

// Output:
// true (if the file exists) or false (if the file does not exist)