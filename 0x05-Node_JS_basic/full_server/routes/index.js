import AppController from "../controllers/AppController";
import StudentsController from "../controllers/StudentsController";
import app from "../server";

// home route
app.get('/', AppController.getHomepage());

// students route
app.get('/students', StudentsController.getAllStudents());

// students route filtered by the 'major' route parameter
app.get('/students/:major', StudentsController.getAllStudentsByMajor());
