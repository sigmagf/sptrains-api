import { ILigaturesRepository } from '~/repositories/ILigaturesRepository';

interface ILigatureFindServiceDTO {
  id: string;
}

export class LineFindService {
  constructor(private repository: ILigaturesRepository) {}

  async execute(data: ILigatureFindServiceDTO) {
    const ligature = await this.repository.find(data.id);

    if(!ligature) {
      throw new Error('No ligature founded.');
    }

    return ligature;
  }
}
