import { Operator } from '~/entities/Operator';

import { IOperatorsRepository } from '~/repositories/IOperatorsRepository';

interface IOperatorCreateServiceDTO {
  name: string;
  alias: string;
}

export class OperatorCreateService {
  constructor(private repository: IOperatorsRepository) {}

  async execute(data: IOperatorCreateServiceDTO) {
    const operator = await this.repository.save(new Operator(data));

    return operator;
  }
}
