import { FastifyInstance } from 'fastify';
import {
  createProjectBodySchema,
  CreateProjectBodyType,
} from '../schemas/bodies/createProjectBodySchema';
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
import { updateUserProjectPermissionHandler } from '../handlers/updateUserProjectPermissionHandler';
import {
  updateUserProjectPermissionParamsSchema,
  UpdateUserProjectPermissionParamsType,
} from '../schemas/params/updateUserProjectPermissionParamsSchema';
import {
  updateUserProjectPermissionBodySchema,
  UpdateUserProjectPermissionBodyType,
} from '../schemas/bodies/updateUserProjectPermissionBodySchema';
import { updateUserProjectPermissionResponseSchema } from '../schemas/responses/updateUserProjectPermissionResponseSchema';
import { ensureAdminPermissionOnProject } from '../../../../../shared/infra/http/middlewares/ensureAdminPermissionOnProject';
import { updateProjectMembersHandler } from '../handlers/updateProjectMembersHandler';
import {
  updateProjectMembersParamsSchema,
  UpdateProjectMembersParamsType,
} from '../schemas/params/updateProjectMembersParamsSchema';
import {
  updateProjectMembersBodySchema,
  UpdateProjectMembersBodyType,
} from '../schemas/bodies/updateProjectMembersBodySchema';
import { updateProjectMembersResponseSchema } from '../schemas/responses/updateProjectMembersResponseSchama';

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

  app.patch<{
    Headers: AuthorizationHeadersType;
    Params: UpdateUserProjectPermissionParamsType;
    Body: UpdateUserProjectPermissionBodyType;
  }>(
    '/user-permission/:project_id',
    {
      schema: {
        summary: 'Update user project permission',
        params: updateUserProjectPermissionParamsSchema,
        body: updateUserProjectPermissionBodySchema,
        response: updateUserProjectPermissionResponseSchema,
      },
      preHandler: [ensureAdminPermissionOnProject],
    },
    updateUserProjectPermissionHandler,
  );

  app.patch<{
    Headers: AuthorizationHeadersType;
    Params: UpdateProjectMembersParamsType;
    Body: UpdateProjectMembersBodyType;
  }>(
    '/members/:project_id',
    {
      schema: {
        summary: 'Update project members',
        headers: authorizationHeadersSchema,
        params: updateProjectMembersParamsSchema,
        body: updateProjectMembersBodySchema,
        response: updateProjectMembersResponseSchema,
      },
      preHandler: [ensureAdminPermissionOnProject],
    },
    updateProjectMembersHandler,
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
