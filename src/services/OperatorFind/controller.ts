import { Request, Response } from 'express';

import { OperatorFindService } from './service';

export class OperatorFindController {
  constructor(private service: OperatorFindService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      const operator = await this.service.execute({ id });

      return res.json(operator);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
