import { Request, Response } from 'express';

import { LigatureListByLineService } from './service';

export class LigatureListController {
  constructor(private service: LigatureListByLineService) {}

  async handle(req: Request, res: Response) {
    try {
      const { lineId } = req.params;
      const ligatures = await this.service.execute({ lineId });

      if(ligatures.length === 0) {
        throw new Error('No ligatures founded.');
      }

      return res.json({ ligatures });
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
