import { Request, Response } from 'express';
import Router from 'express-promise-router';
import UserService from './service';

const userRouter = Router();

userRouter.get('/login', async (req: Request, res: Response) => {
  const user = await UserService.login(req.params.id);
  res.send(user);
});

userRouter.post('/register', async (req: Request, res: Response) => {
  const createdUser = await UserService.register();
});

export default userRouter;
