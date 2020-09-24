import { Request, Response } from 'express';

import { LineFindByNumberService } from './service';

export class LineFindByNumberController {
  constructor(private service: LineFindByNumberService) {}

  async handle(req: Request, res: Response) {
    try {
      const { number } = req.params;

      if(!number) {
        throw new Error('The param \'number\' must be informed.');
      }

      const line = await this.service.execute({ number: parseInt(number, 10) });

      return res.json({ line });
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
