import { Request, Response } from 'express';

import { LineListService } from './service';

export class LineListController {
  constructor(private service: LineListService) {}

  async handle(req: Request, res: Response) {
    try {
      const lines = await this.service.execute();

      if(lines.length === 0) {
        throw new Error('No lines founded.');
      }

      return res.json(lines);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
