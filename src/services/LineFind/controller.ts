import { Request, Response } from 'express';

import { LineFindService } from './service';

export class LineFindController {
  constructor(private service: LineFindService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      const line = await this.service.execute({ id });

      return res.json({ line });
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
