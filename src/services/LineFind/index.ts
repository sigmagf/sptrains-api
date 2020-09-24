import { PrismaLinesRepository } from '~/repositories/PrismaLinesRepository';

import { LineFindController } from './controller';
import { LineFindService } from './service';

const repository = new PrismaLinesRepository();
const lineFindService = new LineFindService(repository);
const lineFindController = new LineFindController(lineFindService);

export { lineFindController, lineFindService };
