import { IStationsRepository } from '~/repositories';

export class StationListService {
  constructor(private repository: IStationsRepository) {}

  async execute() {
    const stations = await this.repository.list();

    return stations;
  }
}
