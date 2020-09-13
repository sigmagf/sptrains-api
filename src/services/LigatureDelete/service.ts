import { ILigaturesRepository } from '~/repositories/ILigaturesRepository';

interface ILineUpdateServiceDTO {
  id: string;
}

export class LigatureDeleteService {
  constructor(private repository: ILigaturesRepository) {}

  async execute(data: ILineUpdateServiceDTO) {
    await this.repository.delete(data.id);
  }
}
