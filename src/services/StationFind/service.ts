import { IStationsRepository } from '~/repositories/IStationsRepository';

interface IStationFindServiceDTO {
  id: string;
}

export class StationFindService {
  constructor(private repository: IStationsRepository) {}

  async execute(data: IStationFindServiceDTO) {
    const station = await this.repository.find(data.id);

    if(!station) {
      throw new Error('No station founded.');
    }

    return station;
  }
}
