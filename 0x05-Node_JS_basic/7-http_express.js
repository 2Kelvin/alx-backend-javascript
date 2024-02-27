const express = require('express');
const { readFile } = require('fs');

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

const app = express();

// root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// students route
app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString()).then((dsp) => {
    res.send(['This is the list of our students', dsp].join('\n'));
  }).catch(() => {
    res.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(1245);

module.exports = app;
