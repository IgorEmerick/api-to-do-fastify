import { config } from 'dotenv';
import Fastify from 'fastify';
import { projectRouter } from '../../../modules/project/infra/http/routes/project.routes';
import { taskRouter } from '../../../modules/task/infra/http/routes/task.routes';
import { userRouter } from '../../../modules/user/infra/http/routes/user.routes';
import * as fastifySwagger from '@fastify/swagger';
import * as fastifySwaggerUi from '@fastify/swagger-ui';

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

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'To-do API',
      version: '1.0.0',
      contact: {
        email: 'igorbarbosaemerick@gmail.com',
        name: 'Igor Emerick',
        url: 'https://www.linkedin.com/in/igor-emerick-b55a44159/',
      },
      description: 'Task manager API.',
    },
    host: 'https://localhost:4001',
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  staticCSP: true,
});

app.register(projectRouter, { prefix: '/project' });
app.register(taskRouter, { prefix: '/task' });
app.register(userRouter, { prefix: '/user' });

export { app };
