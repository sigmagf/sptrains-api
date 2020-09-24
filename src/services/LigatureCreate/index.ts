import { PrismaLigaturesRepository } from '~/repositories/PrismaLigaturesRepository';

import { LigatureCreateController } from './controller';
import { LigatureCreateService } from './service';

const repository = new PrismaLigaturesRepository();
const ligatureCreateService = new LigatureCreateService(repository);
const ligatureCreateController = new LigatureCreateController(ligatureCreateService);

export { ligatureCreateService, ligatureCreateController };
