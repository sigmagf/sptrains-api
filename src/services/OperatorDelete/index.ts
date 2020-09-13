import { PrismaOperatorsRepository } from '~/repositories/PrismaOperatorsRepository';

import { OperatorDeleteController } from './controller';
import { OperatorDeleteService } from './service';

const repository = new PrismaOperatorsRepository();

const operatorDeleteService = new OperatorDeleteService(repository);
const operatorDeleteController = new OperatorDeleteController(operatorDeleteService);

export { operatorDeleteController, operatorDeleteService };
