import { NextFunction, Request, Response } from 'express';

const wipMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if(process.env.NODE_ENV === 'development') {
    return next();
  }

  return res.status(401).json({ message: 'Route in development' });
};

export { wipMiddleware };
