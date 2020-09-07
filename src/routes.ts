import { Router } from 'express';

import { createCompany } from './controllers/companies';
import { createLine, listLine, addStation } from './controllers/lines';
import { createStation } from './controllers/stations';

const router = Router();

router.post('/companies', (req, res) => createCompany(req, res));

router.get('/lines', (req, res) => listLine(req, res));
router.post('/lines', (req, res) => createLine(req, res));
router.post('/lines/stations', (req, res) => addStation(req, res));

router.post('/stations', (req, res) => createStation(req, res));

export { router };
