const fs = require('node:fs/promises');
const displayMessage = require('./0-console');


async function countStudents(filePath) {
  try {
    // using promises to read the file asynchronously
    const data = await fs.readFile(filePath, {encoding: 'utf-8'});
    const fileArray = data.split(/\n/).filter((studLine) => studLine !== '');
    const studentsDataArray = fileArray.slice(1);

    displayMessage(`Number of students: ${studentsDataArray.length}`);

    let csCount = 0;
    let sweCount = 0;
    let csArray = [];
    let sweArray = [];

    for (let i = 0; i < studentsDataArray.length; i++) {
      if (studentsDataArray[i].includes('CS')) {
        csCount++;
        csArray.push(studentsDataArray[i].split(',')[0]);
      } else if (studentsDataArray[i].includes('SWE')) {
        sweCount++;
        sweArray.push(studentsDataArray[i].split(',')[0]);
      }
    }

    displayMessage(`Number of students in CS: ${csCount}. List: ${csArray.join(', ')}`);
    displayMessage(`Number of students in SWE: ${sweCount}. List: ${sweArray.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;