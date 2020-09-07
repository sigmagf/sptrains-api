import { Request, Response } from 'express';

export default async function (req: Request, res: Response): Promise<Response> {
  try {
    return res.status(501).send();
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
