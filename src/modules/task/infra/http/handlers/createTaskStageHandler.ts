import { FastifyReply, FastifyRequest } from 'fastify';
import { createTaskStageBodyType } from '../schemas/createTaskStageBodySchema';
import { container } from '@shared/infra/containers';
import { CreateTaskStageService } from '@modules/task/services/CreateTaskStageService';

interface ICreateTaskStageRequest extends FastifyRequest {
  body: createTaskStageBodyType;
}

export async function createTaskStageHandler(
  request: ICreateTaskStageRequest,
  reply: FastifyReply,
): Promise<void> {
  const { color, name, project_id } = request.body;

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
