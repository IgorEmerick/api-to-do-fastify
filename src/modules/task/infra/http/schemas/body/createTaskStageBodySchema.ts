import { Static, Type } from '@sinclair/typebox';
import { hexRegex } from '../../../../../../config/regex/hexRegex';

export const createTaskStageBodySchema = Type.Object({
  name: Type.String(),
  color: Type.String({ pattern: hexRegex }),
});

export type CreateTaskStageBodyType = Static<typeof createTaskStageBodySchema>;
