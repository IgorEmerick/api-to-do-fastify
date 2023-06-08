import { FastifyInstance } from 'fastify';
import { createUserHandler } from '../controllers/CreateUserHandler';

export async function userRouter(app: FastifyInstance) {
  app.post('/', createUserHandler);
}
