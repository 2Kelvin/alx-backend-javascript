export default class HolbertonCourse {
  constructor(name, length, students) {
    // verifying values
    if (!(typeof (name) === 'string')) throw new TypeError('Name must be a string');
    if (!(typeof (length) === 'number')) throw new TypeError('Length must be a number');
    if (!Array.isArray(students) || students.some((st) => !typeof (st) === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }

  set name(arg) {
    if (!(typeof (arg) === 'string')) throw new TypeError('Name must be a string');
    this._name = arg;
  }

  set length(arg) {
    if (!(typeof (arg) === 'number')) throw new TypeError('Length must be a number');
    this._length = arg;
  }

  set students(arg) {
    if (!Array.isArray(arg) || arg.some((st) => !typeof (st) === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = arg;
  }
}
