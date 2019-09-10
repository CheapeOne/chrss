import express from 'express';
import api from './api';
import statusRouter from './status';
import env from './env';
import { initializeDb } from './db';
import { errorMiddleware } from './middleware';

initializeDb();

const app = express();

app.use('/api/v1', api);
app.use('/', statusRouter);

app.use(errorMiddleware);

const port = env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
