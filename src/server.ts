import { config } from 'dotenv';
import Fastify, { FastifyReply, FastifyRequest } from 'fastify';

config();

const api = Fastify();

api.get('/ping', async (request: FastifyRequest, reply: FastifyReply) => {
  console.log(request);

  return reply.send({ response: 'pong' });
});

api.listen({ port: Number(process.env.API_PORT) }).then(() => {
  console.log(`Server listening on port ${process.env.API_PORT}!`);
});
