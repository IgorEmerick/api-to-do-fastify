import { Static, Type } from '@sinclair/typebox';
import { permissionRegex } from '../../../../../../config/regex/permissionRegex';

export const updateUserProjectPermissionBodySchema = Type.Object({
  user_id: Type.String({ format: 'uuid' }),
  permission: Type.String({ pattern: permissionRegex }),
});

export type UpdateUserProjectPermissionBodyType = Static<
  typeof updateUserProjectPermissionBodySchema
>;
