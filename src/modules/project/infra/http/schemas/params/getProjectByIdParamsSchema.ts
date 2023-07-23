import { Static, Type } from '@sinclair/typebox';

export const getProjectByIdParamsSchema = Type.Object({
  project_id: Type.String({ format: 'uuid' }),
});

export type GetProjectByIdParamsType = Static<
  typeof getProjectByIdParamsSchema
>;
