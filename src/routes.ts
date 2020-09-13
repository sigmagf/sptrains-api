import { Router } from 'express';

import { wipMiddleware } from './middlewares/wipMiddleware';
import { ligatureCreateController } from './services/LigatureCreate';
import { ligatureDeleteController } from './services/LigatureDelete';
import { ligatureFindController } from './services/LigatureFind';
import { ligatureListController } from './services/LigatureList';
import { ligatureListByLineController } from './services/LigatureListByLine';
import { ligatureUpdateController } from './services/LigatureUpdate';
import { lineCreateController } from './services/LineCreate';
import { lineDeleteController } from './services/LineDelete';
import { lineFindController } from './services/LineFind';
import { lineListController } from './services/LineList';
import { lineStatusController } from './services/LineStatus';
import { lineUpdateController } from './services/LineUpdate';
import { operatorCreateController } from './services/OperatorCreate';
import { operatorDeleteController } from './services/OperatorDelete';
import { operatorFindController } from './services/OperatorFind';
import { operatorListController } from './services/OperatorList';
import { operatorUpdateController } from './services/OperatorUpdate';
import { stationCreateController } from './services/StationCreate';
import { stationDeleteController } from './services/StationDelete';
import { stationFindController } from './services/StationFind';
import { stationListController } from './services/StationList';
import { stationUpdateController } from './services/StationUpdate';

const router = Router();

router.get('/stations', wipMiddleware, (req, res) => stationListController.handle(req, res));
router.get('/stations/:id', wipMiddleware, (req, res) => stationFindController.handle(req, res));
router.post('/stations', wipMiddleware, (req, res) => stationCreateController.handle(req, res));
router.put('/stations/:id', wipMiddleware, (req, res) => stationUpdateController.handle(req, res));
router.delete('/stations/:id', wipMiddleware, (req, res) => stationDeleteController.handle(req, res));

router.get('/operators', wipMiddleware, (req, res) => operatorListController.handle(req, res));
router.get('/operators/:id', wipMiddleware, (req, res) => operatorFindController.handle(req, res));
router.post('/operators', wipMiddleware, (req, res) => operatorCreateController.handle(req, res));
router.put('/operators/:id', wipMiddleware, (req, res) => operatorUpdateController.handle(req, res));
router.delete('/operators/:id', wipMiddleware, (req, res) => operatorDeleteController.handle(req, res));

router.get('/lines/status', (req, res) => lineStatusController.handle(req, res));
router.get('/lines', wipMiddleware, (req, res) => lineListController.handle(req, res));
router.get('/lines/:id', wipMiddleware, (req, res) => lineFindController.handle(req, res));
router.post('/lines', wipMiddleware, (req, res) => lineCreateController.handle(req, res));
router.put('/lines/:id', wipMiddleware, (req, res) => lineUpdateController.handle(req, res));
router.delete('/lines/:id', wipMiddleware, (req, res) => lineDeleteController.handle(req, res));

router.get('/ligatures', wipMiddleware, (req, res) => ligatureListController.handle(req, res));
router.get('/ligatures/l/:lineId', wipMiddleware, (req, res) => ligatureListByLineController.handle(req, res));
router.get('/ligatures/:id', wipMiddleware, (req, res) => ligatureFindController.handle(req, res));
router.post('/ligatures', wipMiddleware, (req, res) => ligatureCreateController.handle(req, res));
router.put('/ligatures/:id', wipMiddleware, (req, res) => ligatureUpdateController.handle(req, res));
router.delete('/ligatures/:id', wipMiddleware, (req, res) => ligatureDeleteController.handle(req, res));

router.use('*', (req, res) => res.status(404).json({ message: 'Route not found' }));

export { router };
