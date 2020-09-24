import { PrismaLigaturesRepository } from '~/repositories/PrismaLigaturesRepository';

import { LigatureDeleteController } from './controller';
import { LigatureDeleteService } from './service';

const repository = new PrismaLigaturesRepository();
const ligatureDeleteService = new LigatureDeleteService(repository);
const ligatureDeleteController = new LigatureDeleteController(ligatureDeleteService);

export { ligatureDeleteController, ligatureDeleteService };
