export default class AppController {
  // class method getHomepage
  static getHomepage(request, response) {
    // return status code 200
    response.sendStatus(200);
    // response message
    response.send('Hello Holberton School!');
  }
}
