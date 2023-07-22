import { Static, Type } from '@sinclair/typebox';

export const authorizationHeadersSchema = Type.Object({
  authorization: Type.Optional(Type.String()),
});

export type AuthorizationHeadersType = Static<
  typeof authorizationHeadersSchema
>;
