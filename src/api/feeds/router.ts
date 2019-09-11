import { Request, Response } from 'express';
import Router from 'express-promise-router';
import FeedService from './service';

const feedRouter = Router();

feedRouter.get('/', async (req: Request, res: Response) => {
  const feeds = await FeedService.findAll();
  res.send(feeds);
});

feedRouter.get('/:id', async (req: Request, res: Response) => {
  const feed = await FeedService.findById(req.params.id);
  res.send(feed);
});

feedRouter.post('/', async (req: Request, res: Response) => {
  const createdFeed = await FeedService.create(req.body);
  res.send(createdFeed);
});

export default feedRouter;
