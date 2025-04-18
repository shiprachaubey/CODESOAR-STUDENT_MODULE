
import express, { Application } from 'express';
import dotenv from 'dotenv';
import studentRoutes from './routes/student.routes';
import { logger, notFoundHandler, errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(logger); 
app.use('/api', studentRoutes);

app.get('/health', (_, res) => {
  res.send(' Student Management API is running!');
});

app.use(notFoundHandler);  
app.use(errorHandler);     

export default app;

