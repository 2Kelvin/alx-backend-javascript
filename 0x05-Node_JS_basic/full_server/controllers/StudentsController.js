import readDatabase from '../utils';

export default class StudentsController {
  // class method getAllStudents
  static async getAllStudents(request, resolve) {
    try {
      const file = process.argv[2];
      const sects = await readDatabase(file);
      const sectOrder = Object.keys(sects).sort((a, b) => (
        a.localeCompare(b, undefined, { sensitivity: 'base' })
      ));
      const lns = [
        'This is the list of our students',
        ...sectOrder.map((fd) => {
          const studs = sects[fd].sort();
          return `Number of students in ${fd}: ${studs.length
          }. List: ${studs.join(', ')}`;
        }),
      ];
      resolve.status(200).send(lns.join('\n'));
    } catch (err) {
      resolve.status(500).send('Cannot load the database');
    }
  }

  // class method getAllStudentsByMajor
  static async getAllStudentsByMajor(request, resolve) {
    const major = request.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      resolve.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const fds = await readDatabase(request.app.locals.dbFilePath);
      const studs = fds[major] ? fds[major].map((name) => name.split(' ')[0]) : [];
      resolve.status(200).send(`List: ${studs.join(', ')}`);
    } catch (err) {
      resolve.status(500).send('Cannot load the database');
    }
  }
}
