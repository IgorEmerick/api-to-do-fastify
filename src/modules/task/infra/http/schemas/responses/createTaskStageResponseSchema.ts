import { Type } from '@sinclair/typebox';
import { taskStageSchema } from '../entities/taskStageSchema';

export const createTaskStageResponseSchema = {
  201: Type.Object({ stage: taskStageSchema }),
};
