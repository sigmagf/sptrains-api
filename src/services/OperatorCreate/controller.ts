import { Request, Response } from 'express';

import { OperatorCreateService } from './service';

export class OperatorCreateController {
  constructor(private service: OperatorCreateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, alias } = req.body;

      if(!name) {
        throw new Error('The field \'name\' must be informed.');
      }

      if(!alias) {
        throw new Error('The field \'alias\' must be informed.');
      }

      const operator = await this.service.execute({ name, alias });

      return res.status(201).json(operator);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
