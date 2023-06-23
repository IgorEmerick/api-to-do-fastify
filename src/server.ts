import { app } from '@shared/infra/http/app';
import { startEnvironment } from '@shared/infra/http/startEnvironment';
import { config } from 'dotenv';

config();

startEnvironment().then(() => {
  app.listen({ port: Number(process.env.API_PORT) });
});
