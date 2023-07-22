import { Static, Type } from '@sinclair/typebox';

export const createTaskStageParamsSchema = Type.Object({
  project_id: Type.String({ format: 'uuid' }),
});

export type CreateTaskStageParamsType = Static<
  typeof createTaskStageParamsSchema
>;
