import { Type } from '@sinclair/typebox';

export const projectSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  name: Type.String(),
});
