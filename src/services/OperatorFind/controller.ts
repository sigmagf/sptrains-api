import { Request, Response } from 'express';

import { StationFindService } from './service';

export class StationFindController {
  constructor(private service: StationFindService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      const station = await this.service.execute({ id });

      return res.json({ station });
    } catch(err) {
      return res.status(500).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
