const path = require('path');

const from = '/users/admin/docs';
const to = '/users/admin/images/photo.png';

console.log(path.relative(from, to));
// Output: ../images/photo.png