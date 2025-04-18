import { z } from 'zod';

export const createStudentSchema = z.object({
  registrationNo: z.string().min(1),
  name: z.string().min(1),
  class: z.string().min(1),
  rollNo: z.number().int().positive(),
  contactNumber: z.string().length(10),
});
