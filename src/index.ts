import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 8080;
console.log('hey there!');

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
