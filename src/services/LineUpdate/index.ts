import { PrismaLinesRepository } from '~/repositories/PrismaLinesRepository';

import { LineUpdateController } from './controller';
import { LineUpdateService } from './service';

const repository = new PrismaLinesRepository();
const lineUpdateService = new LineUpdateService(repository);
const lineUpdateController = new LineUpdateController(lineUpdateService);

export { lineUpdateController, lineUpdateService };
