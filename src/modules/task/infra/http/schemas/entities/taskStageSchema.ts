import { Type } from '@sinclair/typebox';
import { hexRegex } from '../../../../../../config/regex/hexRegex';

export const taskStageSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  name: Type.String(),
  color: Type.String({ pattern: hexRegex }),
  project_id: Type.String({ format: 'uuid' }),
});
