import { ILinesRepository } from '~/repositories/ILinesRepository';

interface ILineFindServiceDTO {
  id: string;
}

export class LineFindService {
  constructor(private repository: ILinesRepository) {}

  async execute(data: ILineFindServiceDTO) {
    const line = await this.repository.find(data.id);

    if(!line) {
      throw new Error('No line founded.');
    }

    return line;
  }
}
