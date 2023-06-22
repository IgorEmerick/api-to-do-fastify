import { FastifyInstance } from 'fastify';
import {
  createTaskStageBodySchema,
  createTaskStageBodyType,
} from '../schemas/createTaskStageBodySchema';
import { createTaskStageHandler } from '../handlers/createTaskStageHandler';

export async function taskRouter(app: FastifyInstance) {
  app.post<{ Body: createTaskStageBodyType }>(
    '/stage',
    { schema: { body: createTaskStageBodySchema } },
    createTaskStageHandler,
  );
}
