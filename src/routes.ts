import { Router } from 'express';

import { stationCreate, stationList } from './services';

const router = Router();

router.get('/stations', (req, res) => stationList.handle(req, res));
router.post('/stations', (req, res) => stationCreate.handle(req, res));

router.use('*', (req, res) => res.status(404).json({ message: 'Route not found' }));

export { router };
