const path = require('path');

const result = path.parse('/users/admin/file.txt');

console.log(result);

// Output :

```{
  root: '/',
  dir: '/users/admin',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}```