
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log(' Database connected');
  } catch (error) {
    console.error('Database connection failed:', (error as Error).message);
    process.exit(1);
  }
};

export { prisma, connectDB };
