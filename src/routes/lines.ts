import { Router } from 'express';

import { lineCreateController } from '~/services/LineCreate';
import { lineDeleteController } from '~/services/LineDelete';
import { lineFindController } from '~/services/LineFind';
import { lineFindByNumberController } from '~/services/LineFindByNumber';
import { lineListController } from '~/services/LineList';
import { lineStatusController } from '~/services/LineStatus';
import { lineUpdateController } from '~/services/LineUpdate';

import { wipMiddleware } from '~/middlewares/wipMiddleware';

const linesRouter = Router();

linesRouter.get('/lines/status', (req, res) => lineStatusController.handle(req, res));
linesRouter.get('/lines', wipMiddleware, (req, res) => lineListController.handle(req, res));
linesRouter.get('/lines/n/:number', wipMiddleware, (req, res) => lineFindByNumberController.handle(req, res));
linesRouter.get('/lines/:id', wipMiddleware, (req, res) => lineFindController.handle(req, res));
linesRouter.post('/lines', wipMiddleware, (req, res) => lineCreateController.handle(req, res));
linesRouter.put('/lines/:id', wipMiddleware, (req, res) => lineUpdateController.handle(req, res));
linesRouter.delete('/lines/:id', wipMiddleware, (req, res) => lineDeleteController.handle(req, res));

export { linesRouter };
