import { PrismaLinesRepository } from '~/repositories/PrismaLinesRepository';

import { LineCreateController } from './controller';
import { LineCreateService } from './service';

const repository = new PrismaLinesRepository();
const lineCreateService = new LineCreateService(repository);
const lineCreateController = new LineCreateController(lineCreateService);

export { lineCreateService, lineCreateController };
