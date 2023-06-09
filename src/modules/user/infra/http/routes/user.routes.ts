import { FastifyInstance } from 'fastify';
import { createUserHandler } from '../handlers/CreateUserHandler';

export async function userRouter(app: FastifyInstance) {
  app.post('/', createUserHandler);
}
