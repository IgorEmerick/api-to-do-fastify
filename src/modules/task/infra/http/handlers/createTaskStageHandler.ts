import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateTaskStageBodyType } from '../schemas/bodies/createTaskStageBodySchema';
import { CreateTaskStageParamsType } from '../schemas/params/createTaskStageParamsSchema';
import { container } from '../../../../../shared/infra/containers';
import { CreateTaskStageService } from '../../../services/CreateTaskStageService';

interface ICreateTaskStageRequest extends FastifyRequest {
  body: CreateTaskStageBodyType;
  params: CreateTaskStageParamsType;
}

export async function createTaskStageHandler(
  request: ICreateTaskStageRequest,
  reply: FastifyReply,
): Promise<void> {
  const { color, name } = request.body;
  const { project_id } = request.params;

  const createTaskStageService = container.resolve<CreateTaskStageService>(
    'createTaskStageService',
  );

  const stage = await createTaskStageService.execute({
    color,
    name,
    project_id,
  });

  reply.status(201).send({ stage });
}
