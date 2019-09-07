// import dotenv from 'dotenv';
import { config } from 'dotenv';
import * as express from 'express';
import { Request, Response } from 'express';
import FeedRoutes from './feeds/routes';

// use .env config
config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(FeedRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
