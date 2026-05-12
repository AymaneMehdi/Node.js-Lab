const fs = require('fs');

fs.rm('myFolder', {
  recursive: true,
  force: true
}, (err) => {
  if (err) throw err;

  console.log('Folder deleted');
});