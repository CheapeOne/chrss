import { Request, Response, Router } from 'express';

const feedsRouter = Router();

feedsRouter.get('/', (req: Request, res: Response) => {
  res.send('hey hey');
});

export default feedsRouter;
