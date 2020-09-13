import { ILigaturesRepository } from '~/repositories/ILigaturesRepository';

interface ILigatureUpdateServiceDTO {
  id: string;
  lineId?: string;
  stationId?: string;
  details?: string;
  nextId?: string;
  previousId?: string;
}

export class LigatureUpdateService {
  constructor(private repository: ILigaturesRepository) {}

  async execute(data: ILigatureUpdateServiceDTO) {
    const station = await this.repository.update(
      data.id,
      {
        lineId: data.lineId,
        stationId: data.stationId,
        details: data.details,
        nextId: data.nextId,
        previousId: data.previousId,
      },
    );

    return station;
  }
}
