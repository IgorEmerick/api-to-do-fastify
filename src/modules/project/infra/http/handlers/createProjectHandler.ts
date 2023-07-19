import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateProjectBodyType } from '../schemas/body/createProjectBodySchema';
import { User } from '../../../../user/infra/typeorm/User';
import { container } from '../../../../../shared/infra/containers';
import { CreateProjectService } from '../../../services/CreateProjectService';

interface ICreateProjectRequest extends FastifyRequest {
  user: User;
  body: CreateProjectBodyType;
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
