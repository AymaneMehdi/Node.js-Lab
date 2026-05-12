const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) throw err;

  console.log(files);
});

// Output:
// [ 'fs.mkdir.js', 'fs.readdir.js', 'fs.rmdir.js', 'Remove-Folder-with-Files.js' ...]