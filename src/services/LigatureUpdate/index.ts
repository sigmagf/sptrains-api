import { PrismaLigaturesRepository } from '~/repositories/PrismaLigaturesRepository';

import { LigatureUpdateController } from './controller';
import { LigatureUpdateService } from './service';

const repository = new PrismaLigaturesRepository();
const ligatureUpdateService = new LigatureUpdateService(repository);
const ligatureUpdateController = new LigatureUpdateController(ligatureUpdateService);

export { ligatureUpdateController, ligatureUpdateService };
