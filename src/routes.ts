import { Router } from 'express';

import { stationCreateController } from './services/StationCreate';
import { stationDeleteController } from './services/StationDelete';
import { stationFindController } from './services/StationFind';
import { stationListController } from './services/StationList';
import { stationUpdateController } from './services/StationUpdate';

const router = Router();

router.get('/stations', (req, res) => stationListController.handle(req, res));
router.get('/stations/:id', (req, res) => stationFindController.handle(req, res));
router.post('/stations', (req, res) => stationCreateController.handle(req, res));
router.put('/stations/:id', (req, res) => stationUpdateController.handle(req, res));
router.delete('/stations/:id', (req, res) => stationDeleteController.handle(req, res));

router.use('*', (req, res) => res.status(404).json({ message: 'Route not found' }));

export { router };
