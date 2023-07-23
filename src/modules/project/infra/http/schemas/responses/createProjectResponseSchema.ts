import { Type } from '@sinclair/typebox';
import { projectSchema } from '../entities/projectSchema';
import { projectMemberSchema } from '../entities/projectMemberSchema';

export const createProjectResponseSchema = {
  201: Type.Object({
    project: Type.Composite([
      projectSchema,
      Type.Object({ members: Type.Array(projectMemberSchema) }),
    ]),
  }),
};
