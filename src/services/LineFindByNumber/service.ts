import { ILinesRepository } from '~/repositories/ILinesRepository';

interface ILineFindServiceDTO {
  number: number;
}

export class LineFindByNumberService {
  constructor(private repository: ILinesRepository) {}

  async execute(data: ILineFindServiceDTO) {
    const line = await this.repository.findByNumber(data.number);

    if(!line) {
      throw new Error('No line founded.');
    }

    return line;
  }
}
