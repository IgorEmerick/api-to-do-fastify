import { Static, Type } from '@sinclair/typebox';
import { hexRedex } from 'src/config/regex/hexRegex';

export const createTaskStageBodySchema = Type.Object({
  name: Type.String(),
  color: Type.String({ pattern: hexRedex }),
});

export type createTaskStageBodyType = Static<typeof createTaskStageBodySchema>;
