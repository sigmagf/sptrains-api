import { Request, Response } from 'express';

import { StationCreateService } from './service';

export class StationCreateController {
  constructor(private service: StationCreateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { displayName, fullName, elevator } = req.body;

      if(!displayName) {
        throw new Error('The field \'displayName\' must be informed.');
      }

      if(!fullName) {
        throw new Error('The field \'fullName\' must be informed.');
      }

      const station = await this.service.execute({
        displayName,
        fullName,
        elevator: elevator || false,
      });

      return res.status(201).json(station);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
