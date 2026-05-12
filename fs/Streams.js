const fs = require('fs');

// Create Read Stream
const readStream = fs.createReadStream('test.txt', 'utf8');

readStream.on('data', (chunk) => {
  console.log(chunk);
});

// Create Write Stream
const fs = require('fs');

const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello');
writeStream.write(' World');

writeStream.end();