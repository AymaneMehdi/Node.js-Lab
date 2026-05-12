const readline = require('readline');

// create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// set prompt text (what user will see)
rl.setPrompt(' Enter something: ');

// show prompt first time
rl.prompt();

// listen for user input
rl.on('line', (input) => {
  console.log('You typed:', input);

  if (input === 'exit') {
    rl.close(); // stop program
  } else {
    rl.prompt(); // show prompt again
  }
});

// when closed
rl.on('close', () => {
  console.log('Program ended');
});