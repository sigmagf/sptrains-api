import { Request, Response } from 'express';

import { LigatureDeleteService } from './service';

export class LigatureDeleteController {
  constructor(private service: LigatureDeleteService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      await this.service.execute({ id });

      return res.status(200).send();
    } catch(err) {
      return res.status(500).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
