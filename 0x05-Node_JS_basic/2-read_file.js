const fs = require('node:fs');
const displayMessage = require('./0-console');

// function receives a path to a file argument
// it then reads the file contents
function countStudents(filePath) {
  try {
    // async reading of the file's whole content
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      }

      // placing all file data in an array for easier use
      // splitting the data per line
      // and filtering out empty lines
      const fileArray = data.split(/\n/).filter((studLine) => studLine !== '');
      // counting the array from index 1
      // because the 1st line is the data section titles
      const studentsDataArray = fileArray.slice(1);

      // Counting & printing number of students in the file
      displayMessage(`Number of students: ${studentsDataArray.length}`);

      let csCount = 0;
      let sweCount = 0;
      const csArray = [];
      const sweArray = [];

      // looping thro students data one student at a time
      for (let i = 0; i < studentsDataArray.length; i += 1) {
        // checking if the student field includes 'CS'
        if (studentsDataArray[i].includes('CS')) {
          // if field is 'CS', increase 'CS' students count
          csCount += 1;
          // and add the student's first name to the 'CS' array
          csArray.push(studentsDataArray[i].split(',')[0]);
        } else if (studentsDataArray[i].includes('SWE')) {
          // checking if the student field includes 'SWE'
          // if field is 'SWE', increase 'SWE' students count
          sweCount += 1;
          // and add the student's first name to the 'SWE' array
          sweArray.push(studentsDataArray[i].split(',')[0]);
        }
      }

      displayMessage(`Number of students in CS: ${csCount}. List: ${csArray.join(', ')}`);
      displayMessage(`Number of students in SWE: ${sweCount}. List: ${sweArray.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
