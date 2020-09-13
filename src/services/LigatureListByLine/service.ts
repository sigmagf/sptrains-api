import { ILigaturesRepository } from '~/repositories/ILigaturesRepository';

interface ILigatureListByLineServiceDTO {
  lineId: string;
}

export class LigatureListByLineService {
  constructor(private repository: ILigaturesRepository) {}

  async execute(data: ILigatureListByLineServiceDTO) {
    const ligatures = await this.repository.listByLine(data.lineId);

    return ligatures;
  }
}
