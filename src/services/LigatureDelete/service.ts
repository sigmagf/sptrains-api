import { ILinesRepository } from '~/repositories/ILinesRepository';

interface ILineUpdateServiceDTO {
  id: string;
}

export class LineDeleteService {
  constructor(private repository: ILinesRepository) {}

  async execute(data: ILineUpdateServiceDTO) {
    await this.repository.delete(data.id);
  }
}
