import { Static, Type } from '@sinclair/typebox';

export const updateProjectMembersParamsSchema = Type.Object({
  project_id: Type.String({ format: 'uuid' }),
});

export type UpdateProjectMembersParamsType = Static<
  typeof updateProjectMembersParamsSchema
>;
