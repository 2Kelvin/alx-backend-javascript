const express = require('express');
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

const app = express();

// root route
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// students route
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((msg) => res.send(`This is the list of our students\n${msg}`))
    .catch(() => res.send('Cannot load the database'));
});

app.listen(1245);

module.exports = app;
