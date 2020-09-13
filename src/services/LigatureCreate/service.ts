import { Ligature } from '~/entities/Ligature';

import { ILigaturesRepository } from '~/repositories/ILigaturesRepository';

interface ILigatureCreateServiceDTO {
  lineId: string;
  stationId: string;
  details: string;
  nextId?: string;
  previousId?: string;
}

export class LigatureCreateService {
  constructor(private repository: ILigaturesRepository) {}

  async execute(data: ILigatureCreateServiceDTO) {
    if(await this.repository.findByLineAndStation(data.lineId, data.stationId)) {
      throw new Error('Station already in line.');
    }

    if(!data.nextId && !data.previousId) {
      const haveStationInLine = await this.repository.listByLine(data.lineId);

      if(haveStationInLine.length > 0) {
        throw new Error('Line have\'t empty, inform \'nextId\' or \'previousId\'.');
      }
    }

    const ligature = await this.repository.save(new Ligature(data));

    return ligature;
  }
}
