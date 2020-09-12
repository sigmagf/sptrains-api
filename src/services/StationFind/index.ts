import { PrismaStationsRepository } from '~/repositories';

import { StationFindController } from './controller';
import { StationFindService } from './service';

const repository = new PrismaStationsRepository();

const service = new StationFindService(repository);
const controller = new StationFindController(service);

export default controller;
export { service as stationListService };
