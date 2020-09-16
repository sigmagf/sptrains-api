import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors({
  origin: '*',
}));

app.use(router);

export { app };
