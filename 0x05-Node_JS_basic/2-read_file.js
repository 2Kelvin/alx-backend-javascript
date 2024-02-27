const fs = require('fs');

function countStudents(fileName) {
  const objStuds = {};
  const dataSections = {};
  let len = 0;
  try {
    const fileData = fs.readFileSync(fileName, 'utf-8');
    const fileLine = fileData.toString().split('\n');
    for (let i = 0; i < fileLine.length; i += 1) {
      if (fileLine[i]) {
        len += 1;
        const dataField = fileLine[i].toString().split(',');
        if (Object.prototype.hasOwnProperty.call(objStuds, dataField[3])) {
          objStuds[dataField[3]].push(dataField[0]);
        } else {
          objStuds[dataField[3]] = [dataField[0]];
        }
        if (Object.prototype.hasOwnProperty.call(dataSections, dataField[3])) {
          dataSections[dataField[3]] += 1;
        } else {
          dataSections[dataField[3]] = 1;
        }
      }
    }
    const l = len - 1;
    console.log(`Number of students: ${l}`);
    for (const [key, value] of Object.entries(dataSections)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${objStuds[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
