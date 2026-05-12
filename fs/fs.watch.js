const fs = require('fs');

fs.watch('test.txt', (eventType, filename) => {
  console.log(eventType);
  console.log(filename);
});