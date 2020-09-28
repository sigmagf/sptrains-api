import { Request, Response } from 'express';

import { LigatureListService } from './service';

export class LigatureListController {
  constructor(private service: LigatureListService) {}

  async handle(req: Request, res: Response) {
    try {
      const ligatures = await this.service.execute();

      if(ligatures.length === 0) {
        throw new Error('No ligatures founded.');
      }

      return res.json(ligatures);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
