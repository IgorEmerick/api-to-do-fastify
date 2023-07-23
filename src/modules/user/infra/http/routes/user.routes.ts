import { FastifyInstance } from 'fastify';
import { createUserHandler } from '../handlers/createUserHandler';
import {
  authenticateUserBodySchema,
  AuthenticateUserBodyType,
} from '../schemas/bodies/authenticateUserBodySchema';
import { authenticateUserHandler } from '../handlers/authenticateUserHandler';
import {
  CreateUserBodyType,
  createUserBodySchema,
} from '../schemas/bodies/createUserBodySchema';
import { createUserResponseSchema } from '../schemas/responses/createUserResponseSchema';

export async function userRouter(app: FastifyInstance) {
  app.post<{ Body: CreateUserBodyType }>(
    '/',
    {
      schema: {
        summary: 'Create user',
        body: createUserBodySchema,
        response: createUserResponseSchema,
      },
    },
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
