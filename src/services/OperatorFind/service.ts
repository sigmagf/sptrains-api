import { IOperatorsRepository } from '~/repositories/IOperatorsRepository';

interface IOperatorFindServiceDTO {
  id: string;
}

export class OperatorFindService {
  constructor(private repository: IOperatorsRepository) {}

  async execute(data: IOperatorFindServiceDTO) {
    const operator = await this.repository.find(data.id);

    if(!operator) {
      throw new Error('No operator founded.');
    }

    return operator;
  }
}
