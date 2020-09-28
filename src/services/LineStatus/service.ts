import axios from 'axios';

interface IAPIResponse {
  LinhaId: number;
  Status: string;
  Descricao: string;
  Nome: string;
  Tipo: 'M'|'C'|'4'|'5';
  DataGeracao: Date;
}

interface IStatusFixed {
  id: number;
  name: string;
  status: string;
  details: string;
  operator: 'M'|'C'|'4'|'5';
  updatedAt: Date;
}

export class LineStatusService {
  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  async execute() {
    const status = await axios.get<IAPIResponse[]>(process.env.STATUS_API_URL);

    const fixedStatus:IStatusFixed[] = status.data.map<IStatusFixed>((st) => ({
      id: st.LinhaId,
      name: st.Nome,
      status: st.Status,
      details: st.Descricao,
      operator: st.Tipo,
      updatedAt: st.DataGeracao,
    }));

    return fixedStatus;
  }
}
