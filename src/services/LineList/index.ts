import { PrismaOperatorsRepository } from '~/repositories/PrismaOperatorsRepository';

import { OperatorListController } from './controller';
import { OperatorListService } from './service';

const repository = new PrismaOperatorsRepository();

const operatorListService = new OperatorListService(repository);
const operatorListController = new OperatorListController(operatorListService);

export { operatorListController, operatorListService };
