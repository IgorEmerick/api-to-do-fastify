import { Type } from '@sinclair/typebox';

export const taskOwnerSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  deleted_at: Type.String({ format: 'date-time' }),
  task_id: Type.String({ format: 'uuid' }),
  user_id: Type.String({ format: 'uuid' }),
});
