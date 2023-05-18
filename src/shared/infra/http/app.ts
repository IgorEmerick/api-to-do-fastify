import { userRouter } from '@modules/user/infra/http/routes/user.routes';
import Fastify from 'fastify';

const app = Fastify();

app.register(userRouter, { prefix: '/user' });

export { app };
