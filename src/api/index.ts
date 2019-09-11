import { Router } from 'express';
import { feedRouter } from './feeds';

const api = Router();
api.use('/feeds', feedRouter);

export default api;
