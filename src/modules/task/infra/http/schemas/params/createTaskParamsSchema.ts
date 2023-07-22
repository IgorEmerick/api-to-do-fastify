import { Static, Type } from '@sinclair/typebox';

export const createTaskParamsSchema = Type.Object({
  stage_id: Type.String({ format: 'uuid' }),
  project_id: Type.String({ format: 'uuid' }),
});

export type CreateTaskParamsType = Static<typeof createTaskParamsSchema>;
