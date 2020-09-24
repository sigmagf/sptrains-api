import delay from 'delay';
import { NextFunction, Request, Response } from 'express';

const wipMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if(process.env.NODE_ENV === 'development') {
    delay(500).then(() => next());
    return null;
  }

  return res.status(401).json({ message: 'Route in development' });
};

export { wipMiddleware };
