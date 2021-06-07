import { NextFunction, Request, Response } from 'express';
import logger from './logger.js';

class ErrorHandler extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const handleError = (err: ErrorHandler, _req: Request, res: Response, _next: NextFunction): void => {
  let { statusCode, message } = err;
  if (!statusCode) {
    statusCode = 500;
    message = `Internal server error: ${  message}`;
  }

  logger.error({
    status: "error",
    statusCode,
    message
  });
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message
  });
};

export { ErrorHandler, handleError };
