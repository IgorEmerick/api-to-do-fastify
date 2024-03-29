import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthenticateUserBodyType } from '../schemas/body/authenticateUserBodySchema';
import { container } from '../../../../../shared/infra/containers';
import { AuthenticateUserService } from '../../../services/AuthenticateUserService';

interface IAuthenticateUserRequest extends FastifyRequest {
  body: AuthenticateUserBodyType;
}

export async function authenticateUserHandler(
  request: IAuthenticateUserRequest,
  reply: FastifyReply,
): Promise<void> {
  const { email, password, keep_logged } = request.body;

  const authenticateUserService = container.resolve<AuthenticateUserService>(
    'authenticateUserService',
  );

  const token = await authenticateUserService.execute({
    email,
    keep_logged,
    password,
  });

  reply.send({ token });
}
