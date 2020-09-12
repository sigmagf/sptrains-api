import { IStationsRepository } from '~/repositories';

interface IStationFindServiceDTO {
  id: string;
}

export class StationFindService {
  constructor(private repository: IStationsRepository) {}

  async execute(data: IStationFindServiceDTO) {
    const station = await this.repository.find(data.id);

    return station;
  }
}
