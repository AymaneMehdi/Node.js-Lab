const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,   // take input from keyboard
  output: process.stdout  // show output in terminal
});

function ask() {
  rl.question('Enter something (type exit to stop): ', (input) => {

    console.log('You typed:', input);

    if (input === 'exit') {
      rl.close();
    } else {
      ask(); // repeat
    }
  });
}

ask();