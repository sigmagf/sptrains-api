import { PrismaOperatorsRepository } from '~/repositories/PrismaOperatorsRepository';

import { OperatorFindController } from './controller';
import { OperatorFindService } from './service';

const repository = new PrismaOperatorsRepository();

const operatorListService = new OperatorFindService(repository);
const operatorFindController = new OperatorFindController(operatorListService);

export { operatorFindController, operatorListService };
