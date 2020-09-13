import { ILinesRepository } from '~/repositories/ILinesRepository';

interface ILineFindServiceDTO {
  id: string;
}

export class LineFindService {
  constructor(private repository: ILinesRepository) {}

  async execute(data: ILineFindServiceDTO) {
    const station = await this.repository.find(data.id);

    if(!station) {
      throw new Error('No line founded.');
    }

    return station;
  }
}
