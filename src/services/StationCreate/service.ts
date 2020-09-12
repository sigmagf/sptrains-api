import { Station } from '~/entities/Station';
import { IStationsRepository } from '~/repositories';

interface IStationCreateServiceDTO {
  displayName: string;
  fullName: string;
  elevator: boolean;
}

export class StationCreateService {
  constructor(private repository: IStationsRepository) {}

  async execute(data: IStationCreateServiceDTO) {
    const station = await this.repository.save(new Station(data));

    return station;
  }
}
