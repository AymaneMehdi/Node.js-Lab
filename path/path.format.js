const path = require('path');

const pathObject = {
  root: '/',
  dir: '/users/admin',
  base: 'file.txt'
};

console.log(path.format(pathObject));
// Output: /users/admin/file.txt