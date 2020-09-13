import { Request, Response } from 'express';

import { LineCreateService } from './service';

export class LineCreateController {
  constructor(private service: LineCreateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { number, name, color, active, operatorId } = req.body;

      if(!number) {
        throw new Error('The field \'number\' must be informed.');
      }

      if(!name) {
        throw new Error('The field \'name\' must be informed.');
      }

      if(!color) {
        throw new Error('The field \'color\' must be informed.');
      }

      if(!operatorId) {
        throw new Error('The field \'operatorId\' must be informed.');
      }

      const line = await this.service.execute({ number, name, color, active: active || true, operatorId });

      return res.status(201).json({ line });
    } catch(err) {
      return res.status(500).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
