import { PrismaLinesRepository } from '~/repositories/PrismaLinesRepository';

import { LineFindController } from './controller';
import { LineFindService } from './service';

const repository = new PrismaLinesRepository();

const lineListService = new LineFindService(repository);
const lineFindController = new LineFindController(lineListService);

export { lineFindController, lineListService };
