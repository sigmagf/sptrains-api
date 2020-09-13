import { PrismaStationsRepository } from '~/repositories/PrismaStationsRepository';

import { StationFindController } from './controller';
import { StationFindService } from './service';

const repository = new PrismaStationsRepository();

const stationListService = new StationFindService(repository);
const stationFindController = new StationFindController(stationListService);

export { stationFindController, stationListService };
