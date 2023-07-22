import { Type, Static } from '@sinclair/typebox';
import { passwordRegex } from '../../../../../../config/regex/passwordRegex';

export const createUserBodySchema = Type.Object({
  name: Type.String(),
  email: Type.String({ format: 'email' }),
  password: Type.String({
    pattern: passwordRegex,
    minLength: 10,
    maxLength: 16,
  }),
});

export type CreateUserBodyType = Static<typeof createUserBodySchema>;
