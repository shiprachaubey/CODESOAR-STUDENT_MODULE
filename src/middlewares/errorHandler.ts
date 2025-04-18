import { Request, Response, NextFunction } from 'express';

//incoming request
export const logger = (req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
};

 // Handles 404 Not Found routes.
 
export const notFoundHandler = (_req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found',
  });
};

// Centralized error handler middleware.
 
export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: message,
  });
};
