import { IStationsRepository } from '~/repositories';

interface IStationUpdateServiceDTO {
  id: string;
}

export class StationDeleteService {
  constructor(private repository: IStationsRepository) {}

  async execute(data: IStationUpdateServiceDTO) {
    await this.repository.delete(data.id);
  }
}
