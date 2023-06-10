import { Type, Static } from '@sinclair/typebox';
import { nameRegex } from 'src/config/regex/nameRegex';
import { passwordRegex } from 'src/config/regex/passwordRegex';

export const createUserBodySchema = Type.Object({
  name: Type.String({ pattern: nameRegex }),
  email: Type.String({ format: 'email' }),
  password: Type.String({
    pattern: passwordRegex,
    minLength: 10,
    maxLength: 16,
  }),
});

export type createUserBodyType = Static<typeof createUserBodySchema>;
