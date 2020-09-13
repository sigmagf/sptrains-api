import { PrismaOperatorsRepository } from '~/repositories/PrismaOperatorsRepository';

import { LineDeleteController } from './controller';
import { LineDeleteService } from './service';

const repository = new PrismaOperatorsRepository();

const lineDeleteService = new LineDeleteService(repository);
const lineDeleteController = new LineDeleteController(lineDeleteService);

export { lineDeleteController, lineDeleteService };
