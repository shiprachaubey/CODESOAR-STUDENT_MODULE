import { Router } from 'express';
import {
  handleCreateStudent,
  handleGetStudents,
  handleGetStudentByRegNo,
  handleUpdateStudent,
  handleDeleteStudent
} from '../controllers/student.controller';

const router = Router();

router.post('/students', handleCreateStudent);
router.get('/students', handleGetStudents);


export default router;
