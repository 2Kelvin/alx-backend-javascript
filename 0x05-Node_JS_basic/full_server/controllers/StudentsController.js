import { readDatabase } from "../utils";

export default class StudentsController {
  // static means class method
  // class method getAllStudents
  static getAllStudents(request, response) {
    // return status code 200
    response.sendStatus(200);
    // read the database & display readDatabase() resolve data
  }

  static getAllStudentsByMajor(request, response) {}
}
