import { Request, Response } from 'express';

import { LigatureUpdateService } from './service';

export class LigatureUpdateController {
  constructor(private service: LigatureUpdateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { lineId, stationId, details, nextId, previousId } = req.body;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      if(!lineId && !stationId && !details && !nextId && !previousId) {
        throw new Error('Inform \'lineId\', \'stationId\', \'details\', \'nextId\' or \'previousId\'.');
      }

      const stations = await this.service.execute({ id, lineId, stationId, details, nextId, previousId });

      return res.json({ stations });
    } catch(err) {
      console.log(err);
      return res.status(500).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
