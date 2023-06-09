import { userRouter } from '@modules/user/infra/http/routes/user.routes';
import { config } from 'dotenv';
import Fastify from 'fastify';

config();

const app = Fastify({
  logger:
    process.env.NODE_ENV === 'dev'
      ? {
          transport: {
            target: 'pino-pretty',
            options: { translateTime: 'HH:MM:ss Z', ignore: 'pid,hostname' },
          },
        }
      : true,
});

app.register(userRouter, { prefix: '/user' });

export { app };
