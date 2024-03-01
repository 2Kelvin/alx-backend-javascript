const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
        return;
      }

      const studs = data.split(/\r?\n/).filter(Boolean).slice(1);

      const sects = {};
      for (const student of studs) {
        const stData = student.split(',');

        const stFirstName = stData[0];
        const stField = stData[stData.length - 1];

        if (sects[stField]) {
          sects[stField][0] += 1;
          sects[stField].push(stFirstName);
        } else {
          sects[stField] = [1, stFirstName];
        }
      }

      resolve(sects);
    });
  });
}

module.exports = readDatabase;
