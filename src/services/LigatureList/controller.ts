import { Request, Response } from 'express';

import { LineListService } from './service';

export class LineListController {
  constructor(private service: LineListService) {}

  async handle(req: Request, res: Response) {
    try {
      const operators = await this.service.execute();

      if(operators.length === 0) {
        throw new Error('No lines founded.');
      }

      return res.json({ operators });
    } catch(err) {
      return res.status(500).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
