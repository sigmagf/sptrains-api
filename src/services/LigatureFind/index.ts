import { PrismaLigaturesRepository } from '~/repositories/PrismaLigaturesRepository';

import { LigatureFindController } from './controller';
import { LineFindService } from './service';

const repository = new PrismaLigaturesRepository();

const ligatureListService = new LineFindService(repository);
const ligatureFindController = new LigatureFindController(ligatureListService);

export { ligatureFindController, ligatureListService };
