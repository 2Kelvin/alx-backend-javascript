const { readFile } = require('fs');

function countStudents(fileName) {
  const objStuds = {};
  const sect = {};
  let len = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const fileLn = data.toString().split('\n');
        for (let i = 0; i < fileLn.length; i += 1) {
          if (fileLn[i]) {
            len += 1;
            const f = fileLn[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(objStuds, f[3])) {
              objStuds[f[3]].push(f[0]);
            } else {
              objStuds[f[3]] = [f[0]];
            }
            if (Object.prototype.hasOwnProperty.call(sect, f[3])) {
              sect[f[3]] += 1;
            } else {
              sect[f[3]] = 1;
            }
          }
        }
        const l = len - 1;
        console.log(`Number of students: ${l}`);
        for (const [key, value] of Object.entries(sect)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${value}. List: ${objStuds[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
