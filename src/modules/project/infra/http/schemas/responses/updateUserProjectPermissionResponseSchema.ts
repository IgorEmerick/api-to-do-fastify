import { Type } from '@sinclair/typebox';
import { projectMemberSchema } from '../entities/projectMemberSchema';

export const updateUserProjectPermissionResponseSchema = {
  200: Type.Object({ permission: projectMemberSchema }),
};
