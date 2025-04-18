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
router.get('/students/:regNo', handleGetStudentByRegNo);
router.put('/students/:regNo', handleUpdateStudent);
router.delete('/students/:regNo', handleDeleteStudent);

export default router;

