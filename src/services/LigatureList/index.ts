import { PrismaLigaturesRepository } from '~/repositories/PrismaLigaturesRepository';

import { LigatureListController } from './controller';
import { LigatureListService } from './service';

const repository = new PrismaLigaturesRepository();

const ligatureListService = new LigatureListService(repository);
const ligatureListController = new LigatureListController(ligatureListService);

export { ligatureListController, ligatureListService };
