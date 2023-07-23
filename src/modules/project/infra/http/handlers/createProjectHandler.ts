import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateProjectBodyType } from '../schemas/bodies/createProjectBodySchema';
import { container } from '../../../../../shared/infra/containers';
import { CreateProjectService } from '../../../services/CreateProjectService';

interface ICreateProjectRequest extends FastifyRequest {
  body: CreateProjectBodyType;
}

export async function createProjectHandler(
  request: ICreateProjectRequest,
  reply: FastifyReply,
): Promise<void> {
  const { user_id } = request.headers;
  const { name, members } = request.body;

  const createProjectService = container.resolve<CreateProjectService>(
    'createProjectService',
  );

  const project = await createProjectService.execute({
    admin_id: user_id as string,
    members,
    name,
  });

  reply.status(201).send({ project });
}
