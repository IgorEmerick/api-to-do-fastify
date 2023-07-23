import { Type } from '@sinclair/typebox';

export const taskSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  title: Type.String(),
  description: Type.String(),
  stage_id: Type.String({ format: 'uuid' }),
});
