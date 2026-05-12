const fs = require('fs');

fs.stat('test.txt', (err, stats) => {
  if (err) throw err;

  console.log(stats);

  console.log(stats.isFile());

  console.log(stats.isDirectory());

  console.log(stats.size);
});