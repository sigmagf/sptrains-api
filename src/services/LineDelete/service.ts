import { IOperatorsRepository } from '~/repositories/IOperatorsRepository';

interface ILineUpdateServiceDTO {
  id: string;
}

export class LineDeleteService {
  constructor(private repository: IOperatorsRepository) {}

  async execute(data: ILineUpdateServiceDTO) {
    await this.repository.delete(data.id);
  }
}
