import { PrismaLigaturesRepository } from '~/repositories/PrismaLigaturesRepository';

import { LigatureListController } from './controller';
import { LigatureListByLineService } from './service';

const repository = new PrismaLigaturesRepository();
const ligatureListByLineService = new LigatureListByLineService(repository);
const ligatureListByLineController = new LigatureListController(ligatureListByLineService);

export { ligatureListByLineController, ligatureListByLineService };
