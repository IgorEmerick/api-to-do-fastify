import { Static, Type } from '@sinclair/typebox';

export const createTaskBodySchema = Type.Object({
  title: Type.String(),
  description: Type.String(),
  owners_ids: Type.Array(Type.String()),
});

export type CreateTaskBodyType = Static<typeof createTaskBodySchema>;
