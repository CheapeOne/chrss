import { Router } from 'express';
import { feedsRouter } from './feeds';

const api = Router();
api.use('/feeds', feedsRouter);

export default api;
