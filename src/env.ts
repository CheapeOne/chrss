import { config } from 'dotenv';
import * as dotenvParseVariables from 'dotenv-parse-variables';

interface Env {
  NODE_ENV: string;
  SERVER_PORT: number;
}

// use .env config
const rawEnv = config();
if (rawEnv.error) {
  throw rawEnv.error;
}

const env = dotenvParseVariables(rawEnv.parsed) as Env;

export default env;
