import { FastifyInstance } from 'fastify';
import { createUserHandler } from '../handlers/CreateUserHandler';
import {
  createUserBodySchema,
  createUserBodyType,
} from '../schemas/createUserBodySchema';

export async function userRouter(app: FastifyInstance) {
  app.post<{ Body: createUserBodyType }>(
    '/',
    { schema: { body: createUserBodySchema } },
    createUserHandler,
  );
}
