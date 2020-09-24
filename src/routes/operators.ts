import { Router } from 'express';

import { operatorCreateController } from '~/services/OperatorCreate';
import { operatorDeleteController } from '~/services/OperatorDelete';
import { operatorFindController } from '~/services/OperatorFind';
import { operatorListController } from '~/services/OperatorList';
import { operatorUpdateController } from '~/services/OperatorUpdate';

import { wipMiddleware } from '~/middlewares/wipMiddleware';

const operatorsRoutes = Router();

operatorsRoutes.get('/operators', wipMiddleware, (req, res) => operatorListController.handle(req, res));
operatorsRoutes.get('/operators/:id', wipMiddleware, (req, res) => operatorFindController.handle(req, res));
operatorsRoutes.post('/operators', wipMiddleware, (req, res) => operatorCreateController.handle(req, res));
operatorsRoutes.put('/operators/:id', wipMiddleware, (req, res) => operatorUpdateController.handle(req, res));
operatorsRoutes.delete('/operators/:id', wipMiddleware, (req, res) => operatorDeleteController.handle(req, res));

export { operatorsRoutes };
