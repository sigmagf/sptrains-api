import { ILinesRepository } from '~/repositories/ILinesRepository';

interface ILineUpdateServiceDTO {
  id: string;
  number?: number;
  name?: string;
  color?: string;
  active?: boolean;
  operatorId?: string;
}

export class LineUpdateService {
  constructor(private repository: ILinesRepository) {}

  async execute(data: ILineUpdateServiceDTO) {
    const station = await this.repository.update(
      data.id,
      {
        number: data.number,
        name: data.name,
        color: data.color,
        active: data.active,
        operatorId: data.operatorId,
      },
    );

    return station;
  }
}
