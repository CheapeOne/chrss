import { createServer } from '@marblejs/core';
import httpListener from './app';
import env from './env';

export const server = createServer({
  hostname: '127.0.0.1',
  httpListener,
  port: env.SERVER_PORT,
});

server.run();
