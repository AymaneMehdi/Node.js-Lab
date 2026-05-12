const path = require('path');

// Full file path
const filePath = '/users/admin/docs/file.txt';

// Get filename
console.log(path.basename(filePath));
// Output: file.txt

// Remove extension
console.log(path.basename(filePath, '.txt'));
// Output: file