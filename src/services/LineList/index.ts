import { PrismaLinesRepository } from '~/repositories/PrismaLinesRepository';

import { LineListController } from './controller';
import { LineListService } from './service';

const repository = new PrismaLinesRepository();

const lineListService = new LineListService(repository);
const lineListController = new LineListController(lineListService);

export { lineListController, lineListService };
