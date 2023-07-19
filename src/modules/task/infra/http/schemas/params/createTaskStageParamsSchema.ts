import { Static, Type } from '@sinclair/typebox';
import { uuidV4Regex } from '../../../../../../config/regex/uuidV4Regex';

export const createTaskStageParamsSchema = Type.Object({
  project_id: Type.String({ pattern: uuidV4Regex }),
});

export type createTaskStageParamsType = Static<
  typeof createTaskStageParamsSchema
>;
