import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { BCryptHashProvider } from '@modules/user/providers/implementations/BCryptHashProvider';
import { UserRepository } from '@modules/user/repositories/implementations/UserRepository';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import { DefaultDataSource } from '@shared/infra/typeorm/data_sources/DefaultDataSource';
import { FastifyReply, FastifyRequest } from 'fastify';

interface ICreateUserRequest extends FastifyRequest {
  body: ICreateUserDTO;
}

export async function createUserHandler(
  request: ICreateUserRequest,
  reply: FastifyReply,
): Promise<void> {
  const userRepository = new UserRepository(DefaultDataSource);

  const hashProvider = new BCryptHashProvider();

  const createUserService = new CreateUserService(userRepository, hashProvider);

  const { name, email, password } = request.body;

  await createUserService.execute({ email, name, password });

  reply.status(201).send();
}
