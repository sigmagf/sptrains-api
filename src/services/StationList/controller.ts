import { Request, Response } from 'express';

import { StationListService } from './service';

export class StationListController {
  constructor(private service: StationListService) {}

  async handle(req: Request, res: Response) {
    try {
      const stations = await this.service.execute();

      return res.status(201).json({ stations });
    } catch(err) {
      return res.status(500).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
