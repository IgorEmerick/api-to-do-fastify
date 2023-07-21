import { FastifyReply, FastifyRequest } from 'fastify';
import { GetProjectByIdParamsType } from '../schemas/params/getProjectByIdParamsSchema';
import { container } from '../../../../../shared/infra/containers';
import { GetProjectByIdService } from '../../../services/GetProjectByIdService';

interface IRequest extends FastifyRequest {
  params: GetProjectByIdParamsType;
}

export async function getProjectByIdHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { project_id } = request.params;

  const getProjectByIdService = container.resolve<GetProjectByIdService>(
    'getProjectByIdService',
  );

  const project = await getProjectByIdService.execute(project_id);

  reply.send({ project });
}
