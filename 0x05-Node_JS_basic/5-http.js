// find notes on creating the simple http server on '4-http.js'

const http = require('http');
const url = require('url');
const fs = require('node:fs/promises');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' })
      .then((data) => {
        const fileArray = data.split(/\n/).filter((studLine) => studLine !== '');
        const studentsDataArray = fileArray.slice(1);

        let csCount = 0;
        let sweCount = 0;
        const csArray = [];
        const sweArray = [];

        for (let i = 0; i < studentsDataArray.length; i += 1) {
          if (studentsDataArray[i].includes('CS')) {
            csCount += 1;
            csArray.push(studentsDataArray[i].split(',')[0]);
          } else if (studentsDataArray[i].includes('SWE')) {
            sweCount += 1;
            sweArray.push(studentsDataArray[i].split(',')[0]);
          }
        }

        const message = `Number of students: ${studentsDataArray.length}\n`
          + `Number of students in CS: ${csCount}. List: ${csArray.join(', ')}\n`
          + `Number of students in SWE: ${sweCount}. List: ${sweArray.join(', ')}`;
        // Resolve the Promise with formatted message
        resolve(message);
      })
      .catch(() => {
        // Reject the Promise with error
        reject(new Error('Cannot load the database'));
      });
  });
}

const serverHost = 'localhost';
const serverPort = 1245;

const app = http.createServer((req, resp) => {
  // the request url
  const reqUrlPath = url.parse(req.url).pathname;
  if (reqUrlPath === '/') {
    // index (home) route
    resp.writeHead(200, { 'Content-Type': 'text/plain' });
    resp.end('Hello Holberton School!');
  } else if (reqUrlPath === '/students') {
    // students route
    resp.write('This is the list of our students\n');
    // get the promise resolve / reject obj
    // and write the msg if successful or errorMsg if failed
    countStudents(process.argv[2])
      .then((msg) => resp.end(msg))
      .catch(() => resp.end('Cannot load the database'));
  }
});

app.listen(serverPort, serverHost, process.argv[2]);

module.exports = app;
