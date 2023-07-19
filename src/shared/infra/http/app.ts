import { config } from 'dotenv';
import Fastify from 'fastify';
import { projectRouter } from '../../../modules/project/infra/http/routes/project.routes';
import { taskRouter } from '../../../modules/task/infra/http/routes/task.routes';
import { userRouter } from '../../../modules/user/infra/http/routes/user.routes';

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

app.register(projectRouter, { prefix: '/project' });
app.register(taskRouter, { prefix: '/task' });
app.register(userRouter, { prefix: '/user' });

export { app };
