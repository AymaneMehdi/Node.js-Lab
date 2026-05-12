const fs = require('fs');

// Create file
fs.writeFile('test.txt', 'Hello World', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('File created');
});