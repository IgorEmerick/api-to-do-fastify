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

export async function projectRouter(app: FastifyInstance) {
  app.addHook('preHandler', ensureUserAuthentication);

  app.post<{ Body: CreateProjectBodyType }>(
    '/',
    { schema: { body: createProjectBodySchema } },
    createProjectHandler,
  );

  app.get<{ Params: GetProjectByIdParamsType }>(
    '/project-info/:project_id',
    {
      schema: { params: getProjectByIdParamsSchema },
      preHandler: [ensureViewPermissionOnProject],
    },
    getProjectByIdHandler,
  );
}
