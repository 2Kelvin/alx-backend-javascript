const fs = require('fs');

export default function readDatabase(filePath) {
  // using promises to read the file asynchronously
  // eslint-disable-next-line import/prefer-default-export
  return new Promise((resolve, reject) => {
    // reading the database
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const fileLines = data.trim().split('\n');
        const sections = {};
        fileLines.forEach((ln, idx) => {
          if (idx === 0) {
            // Skip the header line
            return;
          }
          // eslint-disable-next-line no-unused-vars
          const [firstName, lastName, age, field] = ln.split(',');
          if (!sections[field]) {
            sections[field] = [];
          }
          sections[field].push(`${firstName} ${lastName}`);
        });
        resolve(sections);
      }
    });
  });
}
