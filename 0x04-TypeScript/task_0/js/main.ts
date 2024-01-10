// Creating an intereface for a student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const steve: Student = {
  firstName: 'Steve',
  lastName: 'Rogers',
  age: 32,
  location: 'New York',
};

const bucky: Student = {
  firstName: 'Bucky',
  lastName: 'Barnes',
  age: 31,
  location: 'California',
};

const studentsList: Student[] = [steve, bucky];

console.table(studentsList);
// for (const student of studentsList) {
//   console.table([student.firstName, student.location]);
// }
