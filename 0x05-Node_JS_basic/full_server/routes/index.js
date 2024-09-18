import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/studentController.js';

const router = express.Router();

// Define routes
router.get("/", AppController.getHomepage);

router.get("/students", StudentsController.getAllStudents);

router.get("/students/:major", StudentsController.getAllStudentsByMajor);

export default router;
