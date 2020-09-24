import { Router } from 'express';

import { stationCreateController } from '~/services/StationCreate';
import { stationDeleteController } from '~/services/StationDelete';
import { stationFindController } from '~/services/StationFind';
import { stationListController } from '~/services/StationList';
import { stationUpdateController } from '~/services/StationUpdate';

import { wipMiddleware } from '~/middlewares/wipMiddleware';

const stationsRoutes = Router();

stationsRoutes.get('/stations', wipMiddleware, (req, res) => stationListController.handle(req, res));
stationsRoutes.get('/stations/:id', wipMiddleware, (req, res) => stationFindController.handle(req, res));
stationsRoutes.post('/stations', wipMiddleware, (req, res) => stationCreateController.handle(req, res));
stationsRoutes.put('/stations/:id', wipMiddleware, (req, res) => stationUpdateController.handle(req, res));
stationsRoutes.delete('/stations/:id', wipMiddleware, (req, res) => stationDeleteController.handle(req, res));

export { stationsRoutes };
