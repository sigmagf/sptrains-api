import { PrismaStationsRepository } from '~/repositories';

import { StationListController } from './StationListController';
import { StationListService } from './StationListService';

const repository = new PrismaStationsRepository();

const service = new StationListService(repository);
const controller = new StationListController(service);

export default controller;
export { service as stationListService };
