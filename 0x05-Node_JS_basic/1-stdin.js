process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const usrName = process.stdin.read();

  if (usrName) {
    process.stdout.write(`Your name is: ${usrName}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
