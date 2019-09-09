import { Request, Response, Router } from 'express';
import FeedsService from './service';

const feedsRouter = Router();

feedsRouter.get('/', async (req: Request, res: Response) => {
  const feeds = FeedsService.findAll();
  res.send(feeds);
});

feedsRouter.get('/:id', async (req: Request, res: Response) => {
  const feed = await FeedsService.findById(req.params.id);
  res.send(feed);
});

// feedsRouter.post('/', async (req: Request, res: Response) => {
//   const createdFeed = await FeedsService.create(req.body);
//   res.send(createdFeed);
// });

export default feedsRouter;
