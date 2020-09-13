import { ILigaturesRepository } from '~/repositories/ILigaturesRepository';

export class LigatureListService {
  constructor(private repository: ILigaturesRepository) {}

  async execute() {
    const ligatures = await this.repository.list();

    return ligatures;
  }
}
