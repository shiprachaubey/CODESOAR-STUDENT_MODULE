
import express, { Application } from 'express';
import dotenv from 'dotenv';
import studentRoutes from './routes/student.routes';
import { logger, notFoundHandler, errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(logger); //  Request log

app.use('/api', studentRoutes);

app.get('/', (_, res) => {
  res.send('🚀 Student Management API is running!');
});

app.use(notFoundHandler);  // Route not found
app.use(errorHandler);     //  Global error handler

export default app;

