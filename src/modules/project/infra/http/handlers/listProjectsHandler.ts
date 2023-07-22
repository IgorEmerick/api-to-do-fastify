import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from '../../../../../shared/infra/containers';
import { ListProjectsService } from '../../../services/ListProjectsService';

export async function listProjectsHandler(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> {
  const { user_id } = request.headers;

  const listProjectsService = container.resolve<ListProjectsService>(
    'listProjectsService',
  );

  const projects = await listProjectsService.execute(user_id as string);

  reply.send({ projects });
}
