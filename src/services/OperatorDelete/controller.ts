import { Request, Response } from 'express';

import { OperatorDeleteService } from './service';

export class OperatorDeleteController {
  constructor(private service: OperatorDeleteService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      await this.service.execute({ id });

      return res.status(200).send();
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
