import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateTaskBodyType } from '../schemas/body/createTaskBodySchema';
import { CreateTaskParamsType } from '../schemas/params/createTaskParamsSchema';
import { container } from '@shared/infra/containers';
import { CreateTaskService } from '@modules/task/services/CreateTaskService';

interface IRequest extends FastifyRequest {
  body: CreateTaskBodyType;
  params: CreateTaskParamsType;
}

export async function createTaskHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { description, owners_ids, title } = request.body;
  const { stage_id } = request.params;

  const createTaskService =
    container.resolve<CreateTaskService>('createTaskService');

  const task = await createTaskService.execute({
    description,
    owners_ids,
    stage_id,
    title,
  });

  reply.status(201).send({ task });
}
