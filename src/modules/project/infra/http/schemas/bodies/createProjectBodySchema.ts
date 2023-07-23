import { Type, Static } from '@sinclair/typebox';
import { permissionRegex } from '../../../../../../config/regex/permissionRegex';

export const createProjectBodySchema = Type.Object({
  name: Type.String(),
  members: Type.Optional(
    Type.Array(
      Type.Object({
        email: Type.String({ format: 'email' }),
        permission: Type.String({ pattern: permissionRegex }),
      }),
    ),
  ),
});

export type CreateProjectBodyType = Static<typeof createProjectBodySchema>;
