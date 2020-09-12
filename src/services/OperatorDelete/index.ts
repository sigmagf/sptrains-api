import { PrismaStationsRepository } from '~/repositories';

import { StationDeleteController } from './controller';
import { StationDeleteService } from './service';

const repository = new PrismaStationsRepository();

const stationDeleteService = new StationDeleteService(repository);
const stationDeleteController = new StationDeleteController(stationDeleteService);

export { stationDeleteController, stationDeleteService };
