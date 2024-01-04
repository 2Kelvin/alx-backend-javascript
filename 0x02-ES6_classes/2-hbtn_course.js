export default class HolbertonCourse {
  constructor(name, length, students) {
    // verifying values
    if (!(name instanceof String)) throw new TypeError('Name must be a string');
    if (!(length instanceof Number)) throw new TypeError('Length must be a number');
    if (!(Array.isArray(students)) || students.some((st) => !(st instanceof String))) {
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
    if (arg instanceof String) this._name = arg;
    else throw new TypeError('Name must be a string');
  }

  set length(arg) {
    if (arg instanceof Number) this._length = arg;
    else throw new TypeError('Length must be a number');
  }

  set students(arg) {
    if (!(Array.isArray(arg)) || arg.some((st) => !(st instanceof String))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = arg;
  }
}
