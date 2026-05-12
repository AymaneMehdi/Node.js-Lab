const path = require('path');

// Join folder names
const fullPath = path.join('users', 'admin', 'docs', 'file.txt');

console.log(fullPath);
// Linux/macOS: users/admin/docs/file.txt
// Windows: users\admin\docs\file.txt