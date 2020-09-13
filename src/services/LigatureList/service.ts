import { ILinesRepository } from '~/repositories/ILinesRepository';

export class LineListService {
  constructor(private repository: ILinesRepository) {}

  async execute() {
    const operators = await this.repository.list();

    return operators;
  }
}
