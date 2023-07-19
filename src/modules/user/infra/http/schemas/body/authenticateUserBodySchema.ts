import { Static, Type } from '@sinclair/typebox';

export const authenticateUserBodySchema = Type.Object({
  email: Type.String({ format: 'email' }),
  password: Type.String(),
  keep_logged: Type.Boolean({ default: false }),
});

export type AuthenticateUserBodyType = Static<
  typeof authenticateUserBodySchema
>;
