import { Type } from '@sinclair/typebox';
import { permissionRegex } from '../../../../../../config/regex/permissionRegex';

export const projectMemberSchema = Type.Object({
  id: Type.String({ format: 'uuid' }),
  created_at: Type.String({ format: 'date-time' }),
  updated_at: Type.String({ format: 'date-time' }),
  project_id: Type.String({ format: 'uuid' }),
  user_id: Type.String({ format: 'uuid' }),
  permission: Type.String({ pattern: permissionRegex }),
});
