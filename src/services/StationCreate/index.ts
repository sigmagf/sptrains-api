import { PrismaStationsRepository } from '~/repositories';

import { StationCreateController } from './StationCreateController';
import { StationCreateService } from './StationCreateService';

const repository = new PrismaStationsRepository();

const service = new StationCreateService(repository);
const controller = new StationCreateController(service);

export default controller;
export { service as stationCreateService };
