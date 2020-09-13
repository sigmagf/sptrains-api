import { Request, Response } from 'express';

import { LineDeleteService } from './service';

export class LineDeleteController {
  constructor(private service: LineDeleteService) {}

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
