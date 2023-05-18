import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export async function userRouter(app: FastifyInstance) {
  app.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send({ responde: 'pong' });
  });
}
