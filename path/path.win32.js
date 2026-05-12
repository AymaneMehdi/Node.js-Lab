const path = require('path');

// Parse Windows path on any OS
console.log(path.win32.basename('C:\\temp\\file.txt'));

// Output: file.txt