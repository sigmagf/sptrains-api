import { Request, Response } from 'express';

import { LineStatusService } from './service';

export class LineStatusController {
  constructor(private service: LineStatusService) {}

  async handle(req: Request, res: Response) {
    try {
      const status = await this.service.execute();

      return res.json(status);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
