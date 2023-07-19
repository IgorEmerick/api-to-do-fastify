import { Type, Static } from '@sinclair/typebox';

export const createProjectBodySchema = Type.Object({
  name: Type.String(),
  members: Type.Optional(
    Type.Array(
      Type.Object({
        email: Type.String(),
        permission: Type.String({ pattern: '^((ADMIN)|(EDIT)|(VIEW))$' }),
      }),
    ),
  ),
});

export type CreateProjectBodyType = Static<typeof createProjectBodySchema>;
