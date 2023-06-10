import { FastifyInstance } from 'fastify';
import { createUserHandler } from '../handlers/CreateUserHandler';
import {
  createUserBodySchema,
  createUserBodyType,
} from '../schemas/createUserBodySchema';
import {
  authenticateUserBodySchema,
  authenticateUserBodyType,
} from '../schemas/authenticateUserBodySchema';
import { authenticateUserHandler } from '../handlers/AuthenticateUserHandler';

export async function userRouter(app: FastifyInstance) {
  app.post<{ Body: createUserBodyType }>(
    '/',
    { schema: { body: createUserBodySchema } },
    createUserHandler,
  );

  app.post<{ Body: authenticateUserBodyType }>(
    '/authenticate',
    { schema: { body: authenticateUserBodySchema } },
    authenticateUserHandler,
  );
}
