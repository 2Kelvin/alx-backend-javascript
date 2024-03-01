const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response, fileDb) {
    readDatabase(fileDb)
      .then((res) => {
        const studsData = ['This is the list of our students'];
        for (const k of Object.keys(res).sort()) {
          const fName = res[k].slice(1).join(', ');
          const msg = `Number of students in ${k}: ${res[k][0]}. List: ${fName}`;
          studsData.push(msg);
        }
        response.status(200).send(studsData.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(request, response, fileDb) {
    const param = request.params.major;
    if (param !== 'CS' && param !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(fileDb)
        .then((res) => {
          const studsData = res[param].slice(1);
          response.status(200).send(`List: ${studsData.join(', ')}`);
        })
        .catch((err) => {
          response.status(500).send(err.message);
        });
    }
  }
}

module.exports = StudentsController;
