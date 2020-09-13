import { PrismaStationsRepository } from '~/repositories/PrismaStationsRepository';

import { StationUpdateController } from './controller';
import { StationUpdateService } from './service';

const repository = new PrismaStationsRepository();

const stationUpdateService = new StationUpdateService(repository);
const stationUpdateController = new StationUpdateController(stationUpdateService);

export { stationUpdateController, stationUpdateService };
