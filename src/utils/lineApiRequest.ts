import axios from 'axios';

import { ILineStatus } from '~/interfaces/ILineStatus';
import { ILineStatusApi } from '~/interfaces/ILineStatusApi';

type LineStatusRequest = ILineStatus & {
  number: number;
}

export async function getLinesStatus() {
  const apiUrl = 'http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanasAppV3?versao=4';
  const response = await axios.get<ILineStatusApi[]>(apiUrl);

  if(!response.data) {
    return null;
  }

  const result: LineStatusRequest[] = response.data.map((line) => {
    return {
      number: line.LinhaId,
      message: line.Status,
      details: line.Descricao,
      updatedAt: line.DataGeracao,
    };
  });

  return result;
}
