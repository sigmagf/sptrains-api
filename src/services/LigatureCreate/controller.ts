import { Request, Response } from 'express';

import { LigatureCreateService } from './service';

export class LigatureCreateController {
  constructor(private service: LigatureCreateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { lineId, stationId, details, nextId, previousId } = req.body;

      if(!lineId) {
        throw new Error('The field \'lineId\' must be informed.');
      }

      if(!stationId) {
        throw new Error('The field \'stationId\' must be informed.');
      }

      const ligature = await this.service.execute({ lineId, stationId, details, nextId, previousId });

      return res.status(201).json(ligature);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
