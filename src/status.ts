import { Request, Response, Router } from 'express';

const status = Router();

status.get('/', (req: Request, res: Response) => {
  res.send('Hey all, chrss here!');
});

export default status;
