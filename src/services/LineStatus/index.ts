import { LineStatusController } from './controller';
import { LineStatusService } from './service';

const lineStatusService = new LineStatusService();
const lineStatusController = new LineStatusController(lineStatusService);

export { lineStatusService, lineStatusController };
