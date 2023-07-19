import { config } from 'dotenv';
import { app } from './shared/infra/http/app';
import { startEnvironment } from './shared/utils/startEnvironment';

config();

startEnvironment().then(() => {
  app.listen({ port: Number(process.env.API_PORT) });
});
