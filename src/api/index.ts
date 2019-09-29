import { Router } from 'express';
import { feedRouter } from './feeds';
import { userRouter } from './users';

const api = Router();
api.use('/feeds', feedRouter);
api.use('/users', userRouter);

export default api;
