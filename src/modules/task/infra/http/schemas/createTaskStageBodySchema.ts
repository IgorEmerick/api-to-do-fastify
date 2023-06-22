import { Static, Type } from '@sinclair/typebox';
import { hexRedex } from 'src/config/regex/hexRegex';
import { uuidV4Regex } from 'src/config/regex/uuidV4Regex';

export const createTaskStageBodySchema = Type.Object({
  name: Type.String(),
  color: Type.String({ pattern: hexRedex }),
  project_id: Type.String({ pattern: uuidV4Regex }),
});

export type createTaskStageBodyType = Static<typeof createTaskStageBodySchema>;
