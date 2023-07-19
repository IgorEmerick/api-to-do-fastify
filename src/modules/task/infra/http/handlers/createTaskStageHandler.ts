import { FastifyReply, FastifyRequest } from 'fastify';
import { createTaskStageBodyType } from '../schemas/body/createTaskStageBodySchema';
import { createTaskStageParamsType } from '../schemas/params/createTaskStageParamsSchema';
import { container } from '../../../../../shared/infra/containers';
import { CreateTaskStageService } from '../../../services/CreateTaskStageService';

interface ICreateTaskStageRequest extends FastifyRequest {
  body: createTaskStageBodyType;
  params: createTaskStageParamsType;
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
