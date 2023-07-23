import { Type } from '@sinclair/typebox';
import { projectSchema } from '../entities/projectSchema';

export const listProjectResponseSchema = {
  200: Type.Object({ projects: Type.Array(projectSchema) }),
};
