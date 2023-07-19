import { Static, Type } from '@sinclair/typebox';
import { uuidV4Regex } from '../../../../../../config/regex/uuidV4Regex';

export const createTaskBodySchema = Type.Object({
  title: Type.String(),
  description: Type.String(),
  owners_ids: Type.Array(Type.String({ pattern: uuidV4Regex })),
});

export type CreateTaskBodyType = Static<typeof createTaskBodySchema>;
