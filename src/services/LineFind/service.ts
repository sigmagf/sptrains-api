import { IOperatorsRepository } from '~/repositories/IOperatorsRepository';

interface IOperatorFindServiceDTO {
  id: string;
}

export class OperatorFindService {
  constructor(private repository: IOperatorsRepository) {}

  async execute(data: IOperatorFindServiceDTO) {
    const station = await this.repository.find(data.id);

    if(!station) {
      throw new Error('No operator founded.');
    }

    return station;
  }
}
