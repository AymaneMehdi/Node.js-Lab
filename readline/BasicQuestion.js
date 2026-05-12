const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,   // take input from keyboard
  output: process.stdout  // show output in terminal
});

// Ask question
rl.question('What is your name? ', (name) => {
  console.log('Hello', name);

  rl.close(); // close interface
});