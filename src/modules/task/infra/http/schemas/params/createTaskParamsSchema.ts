import { Static, Type } from '@sinclair/typebox';
import { uuidV4Regex } from 'src/config/regex/uuidV4Regex';

export const createTaskParamsSchema = Type.Object({
  stage_id: Type.String({ pattern: uuidV4Regex }),
  project_id: Type.String({ pattern: uuidV4Regex }),
});

export type CreateTaskParamsType = Static<typeof createTaskParamsSchema>;
