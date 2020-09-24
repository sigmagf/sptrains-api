import { ILinesRepository } from '~/repositories/ILinesRepository';

interface ILineUpdateServiceDTO {
  id: string;
  number?: number;
  name?: string;
  active?: boolean;
  operatorId?: string;
}

export class LineUpdateService {
  constructor(private repository: ILinesRepository) {}

  async execute(data: ILineUpdateServiceDTO) {
    const line = await this.repository.update(
      data.id,
      {
        number: data.number,
        name: data.name,
        active: data.active,
        operatorId: data.operatorId,
      },
    );

    return line;
  }
}
