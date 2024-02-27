const http = require('http');

const serverPort = 1245;

// creating a server (app is the server)
const app = http.createServer((req, resp) => {
  // setting the server response status code to 'OK' (200)
  // response will be plain text
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  // returning a plain text as the response body
  resp.end('Hello Holberton School!');
});

// making the server to start listening on port 1245
// and on localhost
app.listen(serverPort);

module.exports = app;
