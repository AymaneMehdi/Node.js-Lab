const fs = require('fs');

fs.copyFile('source.txt', 'copy.txt', (err) => {
  if (err) throw err;

  console.log('Copied');
});