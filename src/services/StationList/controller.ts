import { Request, Response } from 'express';

import { StationListService } from './service';

export class StationListController {
  constructor(private service: StationListService) {}

  async handle(req: Request, res: Response) {
    try {
      const stations = await this.service.execute();

      if(stations.length === 0) {
        throw new Error('No stations founded.');
      }

      return res.json({ stations });
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
