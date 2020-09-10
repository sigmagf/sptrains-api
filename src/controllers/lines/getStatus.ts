import axios from 'axios';
import { Request, Response } from 'express';

import { IStatusResponse, ILineStatus } from '~/interfaces';

export default async function (req: Request, res: Response): Promise<Response> {
  try {
    const result = await axios.get<IStatusResponse[]>(process.env.STATUS_API_URL);

    if(!result.data) {
      throw new Error('Error on get status');
    }

    const status = result.data.map((line): ILineStatus => ({
      id: line.LinhaId,
      name: line.Nome,
      status: line.Status,
      details: line.Descricao,
      operator: line.Tipo,
      updatedAt: line.DataGeracao,
    }));

    return res.json(status);
  } catch(err) {
    return res.status(400).json({
      message: err.message || 'Unexpected error.',
    });
  }
}
