import { FastifyInstance } from 'fastify';
import {
  createProjectBodySchema,
  CreateProjectBodyType,
} from '../schemas/body/createProjectBodySchema';
import { createProjectHandler } from '../handlers/createProjectHandler';
import { ensureUserAuthentication } from '../../../../../shared/infra/http/middlewares/ensureUserAuthentication';
import { getProjectByIdHandler } from '../handlers/getProjectByIdHandler';
import {
  getProjectByIdParamsSchema,
  GetProjectByIdParamsType,
} from '../schemas/params/getProjectByIdParamsSchema';
import { ensureViewPermissionOnProject } from '../../../../../shared/infra/http/middlewares/ensureViewPermissionOnProject';
import { listProjectsHandler } from '../handlers/listProjectsHandler';
import {
  authorizationHeadersSchema,
  AuthorizationHeadersType,
} from '../../../../../shared/infra/http/schemas/headers/authorizationHeadersSchema';
import { createProjectResponseSchema } from '../schemas/responses/createProjectResponseSchema';
import { getProjectByIdResponseSchema } from '../schemas/responses/getProjectByIdResponseSchema';
import { listProjectResponseSchema } from '../schemas/responses/listProjectResponseSchema';

export async function projectRouter(app: FastifyInstance) {
  app.addHook('preHandler', ensureUserAuthentication);

  app.post<{ Body: CreateProjectBodyType; Headers: AuthorizationHeadersType }>(
    '/',
    {
      schema: {
        summary: 'Create project',
        body: createProjectBodySchema,
        headers: authorizationHeadersSchema,
        response: createProjectResponseSchema,
      },
    },
    createProjectHandler,
  );

  app.get<{
    Params: GetProjectByIdParamsType;
    Headers: AuthorizationHeadersType;
  }>(
    '/project-info/:project_id',
    {
      schema: {
        summary: 'Get project info',
        params: getProjectByIdParamsSchema,
        headers: authorizationHeadersSchema,
        response: getProjectByIdResponseSchema,
      },
      preHandler: [ensureViewPermissionOnProject],
    },
    getProjectByIdHandler,
  );

  app.get<{ Headers: AuthorizationHeadersType }>(
    '/projects',
    {
      schema: {
        summary: 'List user projects',
        headers: authorizationHeadersSchema,
        response: listProjectResponseSchema,
      },
    },
    listProjectsHandler,
  );
}
