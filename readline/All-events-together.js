const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  console.log('Line:', input);
});

rl.on('pause', () => {
  console.log('Paused');
});

rl.on('resume', () => {
  console.log('Resumed');
});

rl.on('SIGINT', () => {
  console.log('Ctrl + C pressed');
  rl.close();
});

rl.on('close', () => {
  console.log('Closed');
});