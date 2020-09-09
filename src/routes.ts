import { Router } from 'express';

import { createCompany } from './controllers/companies';
import { createLine, listLine, addStation, findByNumber, getStatus } from './controllers/lines';
import { createStation, listStation } from './controllers/stations';

const router = Router();

router.post('/companies', (req, res) => createCompany(req, res));

router.get('/lines', (req, res) => listLine(req, res));
router.get('/lines/n/:number', (req, res) => findByNumber(req, res));
router.post('/lines', (req, res) => createLine(req, res));
router.post('/lines/stations', (req, res) => addStation(req, res));
router.get('/lines/status', (req, res) => getStatus(req, res));

router.get('/stations', (req, res) => listStation(req, res));
router.post('/stations', (req, res) => createStation(req, res));

export { router };
