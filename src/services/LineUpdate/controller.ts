import { Request, Response } from 'express';

import { LineUpdateService } from './service';

export class LineUpdateController {
  constructor(private service: LineUpdateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { number, name, active, operatorId } = req.body;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      if(!number && !name && !active && !operatorId) {
        throw new Error('Inform \'number\', \'name\', \'active\' or \'operatorId\'.');
      }

      const line = await this.service.execute({ id, number, name, active, operatorId });

      return res.json(line);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
