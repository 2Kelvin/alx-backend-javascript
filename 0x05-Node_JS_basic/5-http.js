const http = require('http');
const { readFile } = require('fs');
const url = require('url');

function countStudents(fileName) {
  const objStuds = {};
  const stns = {};
  let len = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let disp = '';
        const fLn = data.toString().split('\n');
        for (let i = 0; i < fLn.length; i += 1) {
          if (fLn[i]) {
            len += 1;
            const f = fLn[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(objStuds, f[3])) {
              objStuds[f[3]].push(f[0]);
            } else {
              objStuds[f[3]] = [f[0]];
            }
            if (Object.prototype.hasOwnProperty.call(stns, f[3])) {
              stns[f[3]] += 1;
            } else {
              stns[f[3]] = 1;
            }
          }
        }
        const l = len - 1;
        disp += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(stns)) {
          if (key !== 'field') {
            disp += `Number of students in ${key}: ${value}. `;
            disp += `List: ${objStuds[key].join(', ')}\n`;
          }
        }
        resolve(disp);
      }
    });
  });
}

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
    countStudents(process.argv[2].toString()).then((rsd) => {
      const out = rsd.slice(0, -1);
      resp.end(out);
    }).catch(() => resp.end('Cannot load the database'));
  }
}).listen(1245); // server listening on port 1245

module.exports = app;
