import { Express } from 'express';

import { ligaturesRoutes } from './ligatures';
import { linesRouter } from './lines';
import { operatorsRoutes } from './operators';
import { stationsRoutes } from './stations';

export const routes = (app: Express) => {
  app.use(ligaturesRoutes);
  app.use(linesRouter);
  app.use(operatorsRoutes);
  app.use(stationsRoutes);

  app.use('*', (req, res) => res.status(404).json({ message: 'Route not found' }));
};
