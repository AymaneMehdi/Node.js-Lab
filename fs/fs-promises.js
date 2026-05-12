const fs = require('fs/promises');

async function read() {

  const data = await fs.readFile('test.txt', 'utf8');

  console.log(data);
}

read();