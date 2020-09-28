import { Request, Response } from 'express';

import { OperatorListService } from './service';

export class OperatorListController {
  constructor(private service: OperatorListService) {}

  async handle(req: Request, res: Response) {
    try {
      const operators = await this.service.execute();

      if(operators.length === 0) {
        throw new Error('No operators founded.');
      }

      return res.json(operators);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
