import { IOperatorsRepository } from '~/repositories/IOperatorsRepository';

interface IOperatorUpdateServiceDTO {
  id: string;
  name?: string;
  alias?: string;
}

export class OperatorUpdateService {
  constructor(private repository: IOperatorsRepository) {}

  async execute(data: IOperatorUpdateServiceDTO) {
    const station = await this.repository.update(
      data.id,
      {
        name: data.name,
        alias: data.alias,
      },
    );

    return station;
  }
}
