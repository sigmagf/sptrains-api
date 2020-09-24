import { PrismaLinesRepository } from '~/repositories/PrismaLinesRepository';

import { LineFindByNumberController } from './controller';
import { LineFindByNumberService } from './service';

const repository = new PrismaLinesRepository();
const lineFindByNumberService = new LineFindByNumberService(repository);
const lineFindByNumberController = new LineFindByNumberController(lineFindByNumberService);

export { lineFindByNumberController, lineFindByNumberService };
