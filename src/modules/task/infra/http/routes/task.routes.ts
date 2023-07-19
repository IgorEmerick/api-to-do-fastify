import { FastifyInstance } from 'fastify';
import {
  createTaskStageBodySchema,
  createTaskStageBodyType,
} from '../schemas/body/createTaskStageBodySchema';
import { createTaskStageHandler } from '../handlers/createTaskStageHandler';
import {
  createTaskStageParamsSchema,
  createTaskStageParamsType,
} from '../schemas/params/createTaskStageParamsSchema';
import {
  CreateTaskBodyType,
  createTaskBodySchema,
} from '../schemas/body/createTaskBodySchema';
import {
  CreateTaskParamsType,
  createTaskParamsSchema,
} from '../schemas/params/createTaskParamsSchema';
import { createTaskHandler } from '../handlers/createTaskHandler';
import { ensureAdminPermissionOnProject } from '../../../../../shared/infra/http/middlewares/ensureAdminPermissionOnProject';
import { ensureEditPermissionOnProject } from '../../../../../shared/infra/http/middlewares/ensureEditPermissionOnProject';
import { ensureUserAuthentication } from '../../../../../shared/infra/http/middlewares/ensureUserAuthentication';

export async function taskRouter(app: FastifyInstance) {
  app.addHook('preHandler', ensureUserAuthentication);

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
      preHandler: [ensureAdminPermissionOnProject],
    },
    createTaskStageHandler,
  );

  app.post<{ Body: CreateTaskBodyType; Params: CreateTaskParamsType }>(
    '/create/:project_id/:stage_id',
    {
      schema: { body: createTaskBodySchema, params: createTaskParamsSchema },
      preHandler: [ensureEditPermissionOnProject],
    },
    createTaskHandler,
  );
}
