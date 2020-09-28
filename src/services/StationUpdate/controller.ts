import { Request, Response } from 'express';

import { StationUpdateService } from './service';

export class StationUpdateController {
  constructor(private service: StationUpdateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { displayName, fullName, elevator } = req.body;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      if(!displayName && !fullName && !elevator) {
        throw new Error('Inform \'displayName\', \'fullName\' or \'elevator\'.');
      }

      const stations = await this.service.execute({ id, displayName, fullName, elevator });

      return res.json(stations);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
