import { ILinesRepository } from '~/repositories/ILinesRepository';

export class LineListService {
  constructor(private repository: ILinesRepository) {}

  async execute() {
    const lines = await this.repository.list();

    return lines;
  }
}
