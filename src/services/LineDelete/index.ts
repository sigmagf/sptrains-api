import { PrismaLinesRepository } from '~/repositories/PrismaLinesRepository';

import { LineDeleteController } from './controller';
import { LineDeleteService } from './service';

const repository = new PrismaLinesRepository();

const lineDeleteService = new LineDeleteService(repository);
const lineDeleteController = new LineDeleteController(lineDeleteService);

export { lineDeleteController, lineDeleteService };
