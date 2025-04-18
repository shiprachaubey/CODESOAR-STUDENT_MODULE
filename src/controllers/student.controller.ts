import { Request, Response, NextFunction } from 'express';
import {
  createStudent,
  getAllStudents,
  getStudentByRegNo,
  updateStudent,
  softDeleteStudent
} from '../services/student.service';
import { createStudentSchema } from '../utils/validators';

export const handleCreateStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = createStudentSchema.parse(req.body);
    const student = await createStudent(validated);
    res.status(201).json(student);
  } catch (err) {
    next(err);
  }
};

export const handleGetStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
  
      const students = await getAllStudents(page, limit);
      res.status(200).json(students);
    } catch (err) {
      next(err);
    }
  };
  

//  Get by RegNo
export const handleGetStudentByRegNo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const regNo = req.params.regNo;
    const student = await getStudentByRegNo(regNo);
    if (!student || !student.status) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

// ✅ Update Student
export const handleUpdateStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const regNo = req.params.regNo;
    const existing = await getStudentByRegNo(regNo);
    if (!existing || !existing.status) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const updated = await updateStudent(regNo, req.body);
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

// ✅ Soft Delete
export const handleDeleteStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const regNo = req.params.regNo;
    const existing = await getStudentByRegNo(regNo);
    if (!existing || !existing.status) {
      return res.status(404).json({ error: 'Student not found' });
    }

    const deleted = await softDeleteStudent(regNo);
    res.status(200).json({ message: 'Student deleted successfully', student: deleted });
  } catch (err) {
    next(err);
  }
};
