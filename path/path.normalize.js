const path = require('path');

// Normalize weird path
const fixed = path.normalize('/users/admin/../docs//file.txt');

console.log(fixed);
// Output: /users/docs/file.txt