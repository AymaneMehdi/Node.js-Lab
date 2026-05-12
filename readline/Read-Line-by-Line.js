const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('test.txt'),
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  console.log('Line:', line);
});