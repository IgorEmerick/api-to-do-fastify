import { Type, Static } from '@sinclair/typebox';

export const createUserBodySchema = Type.Object({
  name: Type.String({ pattern: '^([a-zA-Z]+)(( [a-zA-Z]+)*)$' }),
  email: Type.String({ format: 'email' }),
  password: Type.String({
    pattern: `^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{10,16}$`,
    minLength: 10,
    maxLength: 16,
  }),
});

export type createUserBodyType = Static<typeof createUserBodySchema>;
