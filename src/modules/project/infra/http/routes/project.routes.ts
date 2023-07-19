import { FastifyInstance } from 'fastify';
import {
  createProjectBodySchema,
  createProjectBodyType,
} from '../schemas/createProjectBodySchema';
import { createProjectHandler } from '../handlers/createProjectHandler';
import { ensureUserAuthentication } from '../../../../../shared/infra/http/middlewares/ensureUserAuthentication';

export async function projectRouter(app: FastifyInstance) {
  app.addHook('preHandler', ensureUserAuthentication);

  app.post<{ Body: createProjectBodyType }>(
    '/',
    { schema: { body: createProjectBodySchema } },
    createProjectHandler,
  );
}
