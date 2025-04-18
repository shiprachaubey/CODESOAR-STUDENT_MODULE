import { prisma } from '../config/db';
import { CreateStudentDTO } from '../types/student.types';

//create student
export const createStudent = async (data: CreateStudentDTO) => {
  return prisma.student.create({ data });
};

//get all student
export const getAllStudents = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
  
    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where: { status: true },
        skip,
        take: limit,
        orderBy: { id: 'asc' },
      }),
      prisma.student.count({ where: { status: true } }),
    ]);
  
    return {
      data: students,
      meta: {
        total,
        page,
        pageCount: Math.ceil(total / limit),
      },
    };
  };
  

//  Get by Registration Number
export const getStudentByRegNo = async (regNo: string) => {
    return prisma.student.findUnique({ where: { registrationNo: regNo } });
  };
  
  // Update Student
  export const updateStudent = async (regNo: string, data: Partial<CreateStudentDTO>) => {
    return prisma.student.update({
      where: { registrationNo: regNo },
      data,
    });
  };
  
  // s Delete
  export const softDeleteStudent = async (regNo: string) => {
    return prisma.student.update({
      where: { registrationNo: regNo },
      data: { status: false },
    });
  };