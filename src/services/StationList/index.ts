import { PrismaStationsRepository } from '~/repositories';

import { StationListController } from './controller';
import { StationListService } from './service';

const repository = new PrismaStationsRepository();

const stationListService = new StationListService(repository);
const stationListController = new StationListController(stationListService);

export { stationListController, stationListService };
