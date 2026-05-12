const path = require('path');

console.log(path.isAbsolute('/users/admin'));
// true

console.log(path.isAbsolute('./docs'));
// false