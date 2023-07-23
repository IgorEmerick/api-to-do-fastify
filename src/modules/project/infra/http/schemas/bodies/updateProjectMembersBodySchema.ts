import { Static, Type } from '@sinclair/typebox';
import { permissionRegex } from '../../../../../../config/regex/permissionRegex';

export const updateProjectMembersBodySchema = Type.Object({
  members: Type.Array(
    Type.Object({
      email: Type.String({ format: 'email' }),
      permission: Type.String({ pattern: permissionRegex }),
    }),
  ),
});

export type UpdateProjectMembersBodyType = Static<
  typeof updateProjectMembersBodySchema
>;
