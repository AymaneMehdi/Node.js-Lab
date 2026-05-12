const path = require('path');

console.log(path.join('a', 'b'));
// Output : a\b

console.log(path.resolve('a', 'b'));
// Output : C:\Users\AymaneMehdi\Node.js-Lab\path\a\b

// join() → combines paths
// resolve() → returns absolute path