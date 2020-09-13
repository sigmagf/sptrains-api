import { IOperatorsRepository } from '~/repositories/IOperatorsRepository';

export class OperatorListService {
  constructor(private repository: IOperatorsRepository) {}

  async execute() {
    const operators = await this.repository.list();

    return operators;
  }
}
