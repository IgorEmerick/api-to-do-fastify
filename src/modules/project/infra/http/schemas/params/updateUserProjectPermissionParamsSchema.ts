import { Static, Type } from '@sinclair/typebox';

export const updateUserProjectPermissionParamsSchema = Type.Object({
  project_id: Type.String({ format: 'uuid' }),
});

export type UpdateUserProjectPermissionParamsType = Static<
  typeof updateUserProjectPermissionParamsSchema
>;
