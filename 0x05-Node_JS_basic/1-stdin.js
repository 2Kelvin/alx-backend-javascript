// importing spawn to create a child process
const { spawn } = require('child_process');

// message to be echoed & printed when readline closes
// child process spawned will 'echo' the string provided (like in shell)
const childProcessEcho = spawn('echo', ['This important software is now closing']);

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  'Welcome to Holberton School, what is your name?\n', (usrName) => {
    // console logging the response with the user name given
    console.log(`Your name is: ${usrName}`);
    readline.close();

    // displaying child process message to console
    // closeMsg is in buffer (bytes) format ...
    // ... so you have to convert it to a string first before printing it
    childProcessEcho.stdout.on('data', (closeMsg) => console.log(closeMsg.toString()));
  },
);
