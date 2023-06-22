import { FastifyInstance } from 'fastify';
import {
  createTaskStageBodySchema,
  createTaskStageBodyType,
} from '../schemas/createTaskStageBodySchema';
import { createTaskStageHandler } from '../handlers/createTaskStageHandler';
import { ensureUserAuthentication } from '@shared/infra/http/middlewares/ensureUserAuthentication';

export async function taskRouter(app: FastifyInstance) {
  app.addHook('preHandler', ensureUserAuthentication);

  app.post<{ Body: createTaskStageBodyType }>(
    '/stage',
    { schema: { body: createTaskStageBodySchema } },
    createTaskStageHandler,
  );
}
