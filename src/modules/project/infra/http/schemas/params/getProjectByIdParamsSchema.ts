import { Static, Type } from '@sinclair/typebox';
import { uuidV4Regex } from '../../../../../../config/regex/uuidV4Regex';

export const getProjectByIdParamsSchema = Type.Object({
  project_id: Type.String({ pattern: uuidV4Regex }),
});

export type GetProjectByIdParamsType = Static<
  typeof getProjectByIdParamsSchema
>;
