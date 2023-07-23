import { Type } from '@sinclair/typebox';
import { projectMemberSchema } from '../entities/projectMemberSchema';

export const updateProjectMembersResponseSchema = {
  200: Type.Object({ project_members: Type.Array(projectMemberSchema) }),
};
