// import dotenv from 'dotenv';
import { httpListener } from '@marblejs/core';
import { bodyParser$ } from '@marblejs/middleware-body';
import { logger$ } from '@marblejs/middleware-logger';

// import { api$ } from './api';

const middlewares = [logger$(), bodyParser$()];

const effects = [];

export default httpListener({ middlewares, effects });
