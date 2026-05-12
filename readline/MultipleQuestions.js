const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,   // take input from keyboard
  output: process.stdout  // show output in terminal
});

rl.question('Enter your name: ', (name) => {

  rl.question('Enter your age: ', (age) => {

    console.log(`Name: ${name}, Age: ${age}`);

    rl.close(); // close interface
  });
});