import { User } from '@modules/user/infra/typeorm/User';
import { ITokenProvider } from '@modules/user/providers/models/ITokenProvider';
import { IUserRepository } from '@modules/user/repositories/models/IUserRepository';
import { HttpError } from '@shared/errors/HttpError';
import { container } from '@shared/infra/containers';
import { FastifyRequest } from 'fastify';

export async function ensureUserAuthentication(
  request: FastifyRequest,
): Promise<void> {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new HttpError(401, 'Invalid authentication!');
  }

  const [, token] = (authorization as string).split('Bearer ');

  if (!token) {
    throw new HttpError(401, 'Invalid authentication!');
  }

  const tokenProvider = container.resolve<ITokenProvider>('tokenProvider');

  let user: User;

  try {
    user = await tokenProvider.verifyToken<User>(token);
  } catch (error) {
    throw new HttpError(401, 'Invalid authentication!');
  }

  const userRepository = container.resolve<IUserRepository>('userRepository');

  const existUser = await userRepository.findById(user.id);

  if (!existUser) {
    throw new HttpError(401, 'Invalid authentication!');
  }

  request.headers['user_id'] = user.id;
}
