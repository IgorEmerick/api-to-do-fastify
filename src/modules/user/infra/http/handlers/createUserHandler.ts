import { FastifyReply, FastifyRequest } from 'fastify';
import { container } from '../../../../../shared/infra/containers';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { CreateUserService } from '../../../services/CreateUserService';

interface ICreateUserRequest extends FastifyRequest {
  body: ICreateUserDTO;
}

export async function createUserHandler(
  request: ICreateUserRequest,
  reply: FastifyReply,
): Promise<void> {
  const { name, email, password } = request.body;

  const createUserService =
    container.resolve<CreateUserService>('createUserService');

  await createUserService.execute({ email, name, password });

  reply.status(201).send();
}
