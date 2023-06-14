import { User } from '@modules/user/infra/typeorm/User';
import { FastifyReply, FastifyRequest } from 'fastify';
import { createProjectBodyType } from '../schemas/createProjectBodySchema';
import { container } from '@shared/infra/containers';
import { CreateProjectService } from '@modules/project/services/CreateProjectService';

interface ICreateProjectRequest extends FastifyRequest {
  user: User;
  body: createProjectBodyType;
}

export async function createProjectHandler(
  request: ICreateProjectRequest,
  reply: FastifyReply,
): Promise<void> {
  const { id } = request.user;
  const { name, members } = request.body;

  const createProjectService = container.resolve<CreateProjectService>(
    'createProjectService',
  );

  const project = await createProjectService.execute({
    admin_id: id,
    members,
    name,
  });

  reply.status(201).send({ project });
}
