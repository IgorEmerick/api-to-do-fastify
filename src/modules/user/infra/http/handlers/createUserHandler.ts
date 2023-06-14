import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import { container } from '@shared/infra/containers';
import { FastifyReply, FastifyRequest } from 'fastify';

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
