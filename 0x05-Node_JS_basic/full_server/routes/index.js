import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const router = express.Router();

// home route
router.get('/', AppController.getHomepage);

// students route
router.get('/students/:major?', StudentsController.getAllStudents);

export default router;
