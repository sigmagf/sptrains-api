import { Request, Response } from 'express';

import { OperatorUpdateService } from './service';

export class OperatorUpdateController {
  constructor(private service: OperatorUpdateService) {}

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, alias } = req.body;

      if(!id) {
        throw new Error('The param \'id\' must be informed.');
      }

      if(!name && !alias) {
        throw new Error('Inform \'name\' or \'alias\'.');
      }

      const operator = await this.service.execute({ id, name, alias });

      return res.json(operator);
    } catch(err) {
      return res.status(400).json({ message: err.message || 'Unexpected error.' });
    }
  }
}
