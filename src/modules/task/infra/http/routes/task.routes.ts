import { FastifyInstance } from 'fastify';
import {
  createTaskStageBodySchema,
  createTaskStageBodyType,
} from '../schemas/createTaskStageBodySchema';
import { createTaskStageHandler } from '../handlers/createTaskStageHandler';
import { ensureUserAuthentication } from '@shared/infra/http/middlewares/ensureUserAuthentication';
import {
  createTaskStageParamsSchema,
  createTaskStageParamsType,
} from '../schemas/createTaskStageParamsSchema';
import { ensureAdminPermissionOnProject } from '@shared/infra/http/middlewares/ensureAdminPermissionOnProject';

export async function taskRouter(app: FastifyInstance) {
  app.addHook('preHandler', ensureUserAuthentication);
  app.addHook('preHandler', ensureAdminPermissionOnProject);

  app.post<{
    Body: createTaskStageBodyType;
    Params: createTaskStageParamsType;
  }>(
    '/stage/:project_id',
    {
      schema: {
        body: createTaskStageBodySchema,
        params: createTaskStageParamsSchema,
      },
    },
    createTaskStageHandler,
  );
}
