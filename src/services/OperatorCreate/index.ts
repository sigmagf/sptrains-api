import { PrismaOperatorsRepository } from '~/repositories/PrismaOperatorsRepository';

import { OperatorCreateController } from './controller';
import { OperatorCreateService } from './service';

const repository = new PrismaOperatorsRepository();

const operatorCreateService = new OperatorCreateService(repository);
const operatorCreateController = new OperatorCreateController(operatorCreateService);

export { operatorCreateService, operatorCreateController };
