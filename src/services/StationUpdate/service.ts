import { IStationsRepository } from '~/repositories/IStationsRepository';

interface IStationUpdateServiceDTO {
  id: string;
  displayName?: string;
  fullName?: string;
  elevator?: boolean;
}

export class StationUpdateService {
  constructor(private repository: IStationsRepository) {}

  async execute(data: IStationUpdateServiceDTO) {
    const station = await this.repository.update(
      data.id,
      {
        displayName: data.displayName,
        fullName: data.fullName,
        elevator: data.elevator,
      },
    );

    return station;
  }
}
