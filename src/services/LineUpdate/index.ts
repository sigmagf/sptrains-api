import { PrismaOperatorsRepository } from '~/repositories/PrismaOperatorsRepository';

import { OperatorUpdateController } from './controller';
import { OperatorUpdateService } from './service';

const repository = new PrismaOperatorsRepository();

const operatorUpdateService = new OperatorUpdateService(repository);
const operatorUpdateController = new OperatorUpdateController(operatorUpdateService);

export { operatorUpdateController, operatorUpdateService };
