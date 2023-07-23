import { Type } from '@sinclair/typebox';

export const authenticateUserResponseSchema = {
  200: Type.Object({ token: Type.String() }),
};
