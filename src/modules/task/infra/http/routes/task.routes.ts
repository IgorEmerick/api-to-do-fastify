import { FastifyInstance } from 'fastify';
import {
  createTaskStageBodySchema,
  CreateTaskStageBodyType,
} from '../schemas/body/createTaskStageBodySchema';
import { createTaskStageHandler } from '../handlers/createTaskStageHandler';
import {
  createTaskStageParamsSchema,
  CreateTaskStageParamsType,
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
import {
  authorizationHeadersSchema,
  AuthorizationHeadersType,
} from '../../../../../shared/infra/http/schemas/headers/authorizationHeadersSchema';

export async function taskRouter(app: FastifyInstance) {
  app.addHook('preHandler', ensureUserAuthentication);

  app.post<{
    Body: CreateTaskStageBodyType;
    Params: CreateTaskStageParamsType;
    Headers: AuthorizationHeadersType;
  }>(
    '/stage/:project_id',
    {
      schema: {
        summary: 'Create task',
        body: createTaskStageBodySchema,
        params: createTaskStageParamsSchema,
        headers: authorizationHeadersSchema,
      },
      preHandler: [ensureAdminPermissionOnProject],
    },
    createTaskStageHandler,
  );

  app.post<{
    Body: CreateTaskBodyType;
    Params: CreateTaskParamsType;
    Headers: AuthorizationHeadersType;
  }>(
    '/create/:project_id/:stage_id',
    {
      schema: {
        summary: 'Create task stage',
        body: createTaskBodySchema,
        params: createTaskParamsSchema,
        headers: authorizationHeadersSchema,
      },
      preHandler: [ensureEditPermissionOnProject],
    },
    createTaskHandler,
  );
}
