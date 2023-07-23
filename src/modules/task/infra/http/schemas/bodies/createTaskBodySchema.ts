import { Static, Type } from '@sinclair/typebox';

export const createTaskBodySchema = Type.Object({
  title: Type.String(),
  description: Type.String(),
  owners_ids: Type.Array(Type.String({ format: 'uuid' })),
});

export type CreateTaskBodyType = Static<typeof createTaskBodySchema>;
