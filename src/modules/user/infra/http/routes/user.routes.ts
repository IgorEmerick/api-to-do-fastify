import { FastifyInstance } from 'fastify';
import { createUserHandler } from '../handlers/createUserHandler';
import {
  authenticateUserBodySchema,
  AuthenticateUserBodyType,
} from '../schemas/body/authenticateUserBodySchema';
import { authenticateUserHandler } from '../handlers/authenticateUserHandler';
import {
  CreateUserBodyType,
  createUserBodySchema,
} from '../schemas/body/createUserBodySchema';

export async function userRouter(app: FastifyInstance) {
  app.post<{ Body: CreateUserBodyType }>(
    '/',
    { schema: { summary: 'Create user', body: createUserBodySchema } },
    createUserHandler,
  );

  app.post<{ Body: AuthenticateUserBodyType }>(
    '/authenticate',
    {
      schema: {
        summary: 'Authenticate user',
        body: authenticateUserBodySchema,
      },
    },
    authenticateUserHandler,
  );
}
