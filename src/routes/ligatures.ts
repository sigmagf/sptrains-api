import { Router } from 'express';

import { ligatureCreateController } from '~/services/LigatureCreate';
import { ligatureDeleteController } from '~/services/LigatureDelete';
import { ligatureFindController } from '~/services/LigatureFind';
import { ligatureListController } from '~/services/LigatureList';
import { ligatureListByLineController } from '~/services/LigatureListByLine';
import { ligatureUpdateController } from '~/services/LigatureUpdate';

import { wipMiddleware } from '~/middlewares/wipMiddleware';

const ligaturesRoutes = Router();

ligaturesRoutes.get('/ligatures', wipMiddleware, (req, res) => ligatureListController.handle(req, res));
ligaturesRoutes.get('/ligatures/l/:lineId', wipMiddleware, (req, res) => ligatureListByLineController.handle(req, res));
ligaturesRoutes.get('/ligatures/:id', wipMiddleware, (req, res) => ligatureFindController.handle(req, res));
ligaturesRoutes.post('/ligatures', wipMiddleware, (req, res) => ligatureCreateController.handle(req, res));
ligaturesRoutes.put('/ligatures/:id', wipMiddleware, (req, res) => ligatureUpdateController.handle(req, res));
ligaturesRoutes.delete('/ligatures/:id', wipMiddleware, (req, res) => ligatureDeleteController.handle(req, res));

export { ligaturesRoutes };
