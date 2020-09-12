import { PrismaStationsRepository } from '~/repositories';

import { StationCreateController } from './controller';
import { StationCreateService } from './service';

const repository = new PrismaStationsRepository();

const stationCreateService = new StationCreateService(repository);
const stationCreateController = new StationCreateController(stationCreateService);

export { stationCreateService, stationCreateController };
